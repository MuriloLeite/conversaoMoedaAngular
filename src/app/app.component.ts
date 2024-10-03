import { Component, OnInit } from '@angular/core';
import { MoedaService } from './moeda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  baseMoeda: string = 'USD';
  resultado: any;

  constructor(private moedaService: MoedaService) {}

  ngOnInit() {
    this.testarServico();
  }

  testarServico() {
    this.moedaService.obterTaxasDeCambio(this.baseMoeda).subscribe(
      (data) => {
        console.log('Resposta da API:', data);
        this.resultado = data;
      },
      (error) => {
        console.error('Erro ao obter dados da API:', error);
      }
    );
  }
}
