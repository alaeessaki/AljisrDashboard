import { Component, OnInit } from '@angular/core';
import {SubscribersService} from './subscribers.service'
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent implements OnInit{
  subscribers;
  dataSource;
  constructor(private SubscribersService:SubscribersService) { }

  ngOnInit() {
    this.SubscribersService.getSubscribers().subscribe(data=>{
      this.subscribers = data;
      this.dataSource = new MatTableDataSource(this.subscribers)
    });

  } 
  displayedColumns: string[] = ['position', 'email', 'subscribeDate'];
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
