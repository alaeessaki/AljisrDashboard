import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BenevolesComponent } from './pages/benevoles/benevoles.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { ModBenevoleComponent } from './pages/benevoles/mod-benevole/mod-benevole.component'
import { BenevolePdfComponent } from './pages/benevoles/benevole-pdf/benevole-pdf.component'
import { SubscribersComponent } from './pages/subscribers/subscribers.component'
import { EvenementComponent } from './pages/evenement/evenement.component'
import { AddEventComponent } from './pages/evenement/add-event/add-event.component'
import { EventListComponent } from './pages/evenement/event-list/event-list.component'
import { EventParticipantComponent } from './pages/evenement/event-participant/event-participant.component';



const routes: Routes = [
  { 'path': 'benevoles', 'component': BenevolesComponent },
  { 'path': 'dashboard', 'component': DashboardComponent },
  { 'path': 'modBenevole/:id', 'component': ModBenevoleComponent },
  { 'path': 'imprimerBenevole/:id', 'component': BenevolePdfComponent },
  { 'path': 'subscribers', 'component': SubscribersComponent },
  {
    'path': 'evenements', 'component': EvenementComponent,
    'children': [
      { 'path': '', redirectTo: 'eventslist', pathMatch: 'full' },
      { 'path': 'eventslist', 'component': EventListComponent },
      { 'path': 'addEvent', 'component': AddEventComponent },
      { 'path': 'eventParticipants/:id', 'component': EventParticipantComponent }
    ]
  },
  { 'path': '', 'component': BenevolesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [BenevolesComponent, DashboardComponent, ModBenevoleComponent, BenevolePdfComponent, SubscribersComponent, EvenementComponent, AddEventComponent, EventListComponent, EventParticipantComponent]
