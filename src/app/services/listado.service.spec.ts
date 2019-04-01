import { TestBed, inject } from '@angular/core/testing';

import { ListadoService } from './listado.service';

describe('ListadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListadoService]
    });
  });

  it('should be created', inject([ListadoService], (service: ListadoService) => {
    expect(service).toBeTruthy();
  }));
});
