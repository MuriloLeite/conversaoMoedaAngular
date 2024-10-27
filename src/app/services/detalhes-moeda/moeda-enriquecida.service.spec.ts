import { TestBed } from '@angular/core/testing';

import { MoedaEnriquecidaService } from './moeda-enriquecida.service';

describe('MoedaEnriquecidaService', () => {
  let service: MoedaEnriquecidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoedaEnriquecidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
