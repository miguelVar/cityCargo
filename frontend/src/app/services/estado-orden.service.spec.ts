import { TestBed } from '@angular/core/testing';

import { EstadoOrdenService } from './estado-orden.service';

describe('EstadoOrdenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstadoOrdenService = TestBed.get(EstadoOrdenService);
    expect(service).toBeTruthy();
  });
});
