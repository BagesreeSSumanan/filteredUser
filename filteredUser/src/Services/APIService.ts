import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class APIservice{
 api = 'https://dummyjson.com/users'
 constructor(private http : HttpClient){}
getData(id: number): Observable<any> {
  return this.http.get(`https://dummyjson.com/users/${id}`);
}
}