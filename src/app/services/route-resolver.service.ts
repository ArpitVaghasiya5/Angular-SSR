import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productss } from '../Interfaces/interfaces';
import { environment } from '../../environments/environment';
import { constants } from '../../environments/constants';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteResolverService {

  constructor(private _httpClient : HttpClient) { }

  getData(){
    return this._httpClient.get<Productss[]>(environment.apiurl + constants.getData).pipe
    (
      map((res :any) => {
        return res.data;
      })
    );
  }
}
