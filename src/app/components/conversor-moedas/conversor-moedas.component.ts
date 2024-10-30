import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConversorMoedasService } from '../../services/conversor-moeda/conversor-moedas.service';
import { HistoricoConversoesService } from '../../services/historico-conversao/historico-conversoes.service';

@Component({
  selector: 'app-conversor-moedas',
  templateUrl: './conversor-moedas.component.html',
  styleUrls: ['./conversor-moedas.component.css']
})
export class ConversorMoedasComponent implements OnInit {
  moedas: any[] = [];
  moedaOrigem: string = 'BRL';
  moedaDestino: string = 'USD';
  valor: number = 1;
  resultado: number | null = null;
  taxaDeCambio: number | null = null;

  @ViewChild('historicoScroll') historicoScroll!: ElementRef;

  constructor(
    private conversorMoedasService: ConversorMoedasService,
    private historicoConversoesService: HistoricoConversoesService
  ) {}

  ngOnInit(): void {
    this.conversorMoedasService.obterMoedasSelecao('USD').subscribe((data) => {
      this.moedas = Object.keys(data.conversion_rates);
    });
  }

  converter(): void {
    if (this.moedaOrigem && this.moedaDestino && this.valor) {
      this.conversorMoedasService.obterConversaoPares(this.moedaOrigem, this.moedaDestino)
        .subscribe(resposta => {
          this.taxaDeCambio = resposta.conversion_rate;
          this.resultado = this.valor * (this.taxaDeCambio ?? 1);
  
          const conversao = {
            data: new Date().toLocaleDateString(),
            hora: new Date().toLocaleTimeString(),
            valorEntrada: this.valor,
            moedaEntrada: this.moedaOrigem,
            valorSaida: this.resultado,
            moedaSaida: this.moedaDestino,
            taxa: this.taxaDeCambio ?? 0,
          };

          this.historicoConversoesService.adicionarConversao(conversao);
        });
    }
  }
}
