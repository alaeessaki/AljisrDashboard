import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {
  
  constructor(private http: HttpClient) { }
  getSubscribers(){
    return this.http.get('../api/subscribers');
  }
}
