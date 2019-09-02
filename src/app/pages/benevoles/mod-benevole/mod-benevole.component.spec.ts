import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModBenevoleComponent } from './mod-benevole.component';

describe('ModBenevoleComponent', () => {
  let component: ModBenevoleComponent;
  let fixture: ComponentFixture<ModBenevoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModBenevoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModBenevoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
