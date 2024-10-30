import { Component, OnInit } from '@angular/core';
import { HistoricoConversoesService } from '../../services/historico-conversao/historico-conversoes.service';

@Component({
  selector: 'app-historico-conversoes',
  templateUrl: './historico-conversoes.component.html',
  styleUrls: ['./historico-conversoes.component.css']
})
export class HistoricoConversoesComponent implements OnInit {
  historico: any[] = [];

  constructor(private historicoConversoesService: HistoricoConversoesService) {}

  ngOnInit(): void {
    this.historicoConversoesService.getHistoricoObservable().subscribe((novoHistorico) => {
      this.historico = novoHistorico;
    });
  }

  excluirConversao(index: number): void {
    this.historicoConversoesService.excluirConversao(index);
  }

  deletarTodoHistorico(): void {
    this.historicoConversoesService.deletarTodoHistorico();
  }
}
