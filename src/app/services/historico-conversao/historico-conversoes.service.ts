import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoConversoesService {
  private historico: any[] = [];
  private historicoSubject = new Subject<any[]>();

  constructor() {}

  obterHistorico(): any[] {
    return this.historico;
  }

  adicionarConversao(conversao: any): void {
    this.historico.push(conversao);
    this.historicoSubject.next([...this.historico]);
  }

  excluirConversao(index: number): void {
    this.historico.splice(index, 1);
    this.historicoSubject.next([...this.historico]);
  }

  getHistoricoObservable() {
    return this.historicoSubject.asObservable();
  }
}
