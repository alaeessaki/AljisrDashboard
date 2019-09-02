import { TestBed } from '@angular/core/testing';

import { PdfFontsService } from './pdf-fonts.service';

describe('PdfFontsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdfFontsService = TestBed.get(PdfFontsService);
    expect(service).toBeTruthy();
  });
});
