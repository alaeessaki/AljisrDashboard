import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementService } from '../evenement.service';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-participant',
  templateUrl: './event-participant.component.html',
  styleUrls: ['./event-participant.component.scss']
})
export class EventParticipantComponent implements OnInit {
  id;
  participants$ : Observable<any>;
  participants;
  dataSource;
  constructor(private route: ActivatedRoute, private eventsService:EvenementService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    
    // getting data
    this.participants$ = this.eventsService.getParticipants(id);
    this.participants$.subscribe(data=>{
      this.participants = data;
      this.dataSource = new MatTableDataSource(this.participants);
    })
  }
  displayedColumns: string[] = ['position', 'Nom', 'Prenom','email', 'telephone'];


}
