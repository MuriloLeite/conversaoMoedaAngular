import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MoedaDetalhesService } from '../../services/detalhes-moeda/moeda-detalhes.service';

@Component({
  selector: 'app-tabela-moedas',
  templateUrl: './tabela-moedas.component.html',
  styleUrls: ['./tabela-moedas.component.css']
})
export class TabelaMoedasComponent implements OnInit {
  colunasExibir: string[] = ['codigo', 'nome'];
  fonteDados: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginador!: MatPaginator;
  @ViewChild(MatSort) ordenacao!: MatSort;

  constructor(private moedaService: MoedaDetalhesService) {}

  ngOnInit(): void {
    this.moedaService.obterMoedasSuportadas().subscribe(resposta => {
      const listaMoedas = this.formatarMoedas(resposta.supported_codes);
      this.fonteDados = new MatTableDataSource(listaMoedas);
      this.fonteDados.paginator = this.paginador;
      this.fonteDados.sort = this.ordenacao;
    });
  }

  formatarMoedas(moedas: [string, string][]): any[] {
    return moedas.map(moeda => {
      return { codigo: moeda[0], nome: moeda[1] };
    });
  }
}
