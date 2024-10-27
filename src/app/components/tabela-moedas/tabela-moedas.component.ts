import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MoedaEnriquecidaService } from '../../services/detalhes-moeda/moeda-enriquecida.service';

@Component({
  selector: 'app-tabela-moedas',
  templateUrl: './tabela-moedas.component.html',
  styleUrls: ['./tabela-moedas.component.css']
})
export class TabelaMoedasComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'nome'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private moedaEnriquecidaService: MoedaEnriquecidaService) {}

  ngOnInit(): void {
    this.moedaEnriquecidaService.obterMoedasSuportadas().subscribe(resposta => {
      const moedas = this.formatarMoedas(resposta.supported_codes);
      this.dataSource = new MatTableDataSource(moedas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  formatarMoedas(moedas: [string, string][]): any[] {
    return moedas.map(moeda => {
      return { codigo: moeda[0], nome: moeda[1] };
    });
  }
}
