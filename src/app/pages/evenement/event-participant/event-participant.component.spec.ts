import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventParticipantComponent } from './event-participant.component';

describe('EventParticipantComponent', () => {
  let component: EventParticipantComponent;
  let fixture: ComponentFixture<EventParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
