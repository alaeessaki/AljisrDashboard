import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenevolesComponent } from './benevoles.component';

describe('BenevolesComponent', () => {
  let component: BenevolesComponent;
  let fixture: ComponentFixture<BenevolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenevolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenevolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
