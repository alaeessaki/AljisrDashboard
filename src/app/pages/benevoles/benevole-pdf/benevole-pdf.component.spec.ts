import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenevolePdfComponent } from './benevole-pdf.component';

describe('BenevolePdfComponent', () => {
  let component: BenevolePdfComponent;
  let fixture: ComponentFixture<BenevolePdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenevolePdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenevolePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
