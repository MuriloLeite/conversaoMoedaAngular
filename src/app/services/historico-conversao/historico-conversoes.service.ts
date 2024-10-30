import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoConversoesService {
  private historico: any[] = [];
  private historicoAtualizado = new Subject<any[]>();

  constructor() {}

  obterHistorico(): any[] {
    return this.historico;
  }

  adicionarConversao(conversao: any): void {
    this.historico.push(conversao);
    this.historicoAtualizado.next([...this.historico]);
  }

  excluirConversao(index: number): void {
    this.historico.splice(index, 1);
    this.historicoAtualizado.next([...this.historico]);
  }

  getHistoricoObservable() {
    return this.historicoAtualizado.asObservable();
  }

  deletarTodoHistorico(): void {
    this.historico = [];
    this.historicoAtualizado.next(this.historico);
  }
}
