import { Component, OnInit } from '@angular/core';
import { APIservice } from '../../Services/APIService';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  constructor(private service :APIservice){}
  userIDs =[1, 4 , 7,9];
  FilteredUser: any = [];
 ngOnInit(){
 from(this.userIDs).pipe(
   mergeMap(userId => this.service.getData(userId)), 
    toArray()
    )
    .subscribe(filteredData => {
      console.log(filteredData);
       this.FilteredUser = filteredData;
    });
  }
}


