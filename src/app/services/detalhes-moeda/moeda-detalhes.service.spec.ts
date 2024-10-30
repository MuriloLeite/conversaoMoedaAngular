import { TestBed } from '@angular/core/testing';

import { MoedaDetalhesService } from './moeda-detalhes.service';

describe('MoedaDetalhesService', () => {
  let service: MoedaDetalhesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoedaDetalhesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
