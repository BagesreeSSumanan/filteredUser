import { Component, OnInit } from '@angular/core';
import { APIservice } from '../../Services/APIService';
import { map } from 'rxjs/operators';

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
  this.service.getData().
  pipe(
 map((res: any) => 
        (res.users as any[]).filter(user => this.userIDs.includes(user.id))
      )
  ).
  subscribe(filtereddata  => {
    console.log(filtereddata );
    this.FilteredUser = filtereddata ;
  });
  }
}


