import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { constants } from '../../environments/constants';

@Injectable({
  providedIn: 'root'
})
export class StapiDynamicService {

   constructor(private http: HttpClient) {}

  getDynamicComponents(){
    return this.http.get<any>(environment.apiurl + constants.getDynamicComponents).pipe
    (
      map((res :any) => {
        return res.data;
      })
    );;
  }
  

 
}
