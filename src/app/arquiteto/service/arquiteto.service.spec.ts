import { TestBed } from '@angular/core/testing';

import { ArquitetoService } from './arquiteto.service';

describe('ArquitetoService', () => {
  let service: ArquitetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArquitetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
