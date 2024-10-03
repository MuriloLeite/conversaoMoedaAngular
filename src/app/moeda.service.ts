import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  private apiKey: string = '6834e5401d1742ca33a728e6';
  private apiUrl: string = `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/`;

  constructor(private http: HttpClient) { }

  obterTaxasDeCambio(base: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${base}`);
  }
}
