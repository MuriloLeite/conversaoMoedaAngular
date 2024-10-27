import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorMoedasService {
  private apiKey: string = '6834e5401d1742ca33a728e6';
  private apiUrl: string = `https://v6.exchangerate-api.com/v6/${this.apiKey}/pair`;

  constructor(private http: HttpClient) {}

  obterConversaoPares(moedaOrigem: string, moedaDestino: string): Observable<any> {
    const url = `${this.apiUrl}/${moedaOrigem}/${moedaDestino}`;
    return this.http.get(url);
  }
}