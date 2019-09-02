import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../evenement.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events$:Observable<any>;
  constructor(private eventService:EvenementService) { }

  ngOnInit() {
    this.events$ = this.eventService.getEvents();
  }

  supprimerEvent(event){
    this.eventService.deleteEvent(event).subscribe(
      result=>{
        console.log(result);
        this.ngOnInit();
      },
      err=>{
        console.error(err);
      }
    );
  }
  
}
