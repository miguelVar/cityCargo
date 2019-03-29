import { TestBed } from '@angular/core/testing';

import { TipovehiculoService } from './tipovehiculo.service';

describe('TipovehiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipovehiculoService = TestBed.get(TipovehiculoService);
    expect(service).toBeTruthy();
  });
});
