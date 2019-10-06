import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private _http: HttpClient) { }

  // get events
  getEvents() {
    return this._http.get('../api/events');
  }

  getParticipants(event){
    return this._http.get('../api/eventsParticipants/'+event)
  }

  // add Event
  addEvent(event) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._http.post('../api/addEvent', event, httpOptions)
  }

  // add participant
  addParticipant(participant, event){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._http.post('../api/addParticipant/'+event, participant, httpOptions)
  }

  // modify Event
  modifyEvent(id, data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._http.put('../api/addParticipant/'+id, data, httpOptions)
  }

  // delete Event
  deleteEvent(event){
    return this._http.delete('../api/deleteEvent/'+event)
  }

  // delete particpant from an event
  deleteParticipant(participant, event){
    return this._http.delete('../api/deleteEventParticipant/'+event+'/'+participant)
  }
}
