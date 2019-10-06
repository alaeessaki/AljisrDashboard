import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenevolesComponent } from './benevoles/benevoles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModBenevoleComponent } from './benevoles/mod-benevole/mod-benevole.component';
import { BenevolePdfComponent } from './benevoles/benevole-pdf/benevole-pdf.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { EvenementComponent } from './evenement/evenement.component';
import { AddEventComponent } from './evenement/add-event/add-event.component';
import { EventListComponent } from './evenement/event-list/event-list.component';
import { EventParticipantComponent } from './evenement/event-participant/event-participant.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
