import { TestBed } from '@angular/core/testing';

import { ETransporteService } from './e-transporte.service';

describe('ETransporteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ETransporteService = TestBed.get(ETransporteService);
    expect(service).toBeTruthy();
  });
});
