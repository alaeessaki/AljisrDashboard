import { TestBed } from '@angular/core/testing';

import { BenevolesService } from './benevoles.service';

describe('BenevolesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BenevolesService = TestBed.get(BenevolesService);
    expect(service).toBeTruthy();
  });
});
