import { TestBed } from '@angular/core/testing';

import { EvenementService } from './evenement.service';

describe('EvenementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvenementService = TestBed.get(EvenementService);
    expect(service).toBeTruthy();
  });
});
