import { Component, OnInit } from '@angular/core';
// import { EvenementService } from './evenement.service'
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {
  // private eventService:EvenementService
  // events$:Observable<any>;
  constructor() { }

  ngOnInit() {
    // this.events$ = this.eventService.getEvents();
    // this.events$.subscribe(data=>{
    //   console.log(data[0].date.substring(0, data[0].date.length -8));
    // })
  }

  
}
