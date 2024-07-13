import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Productss } from '../Interfaces/interfaces';
import { environment } from '../../environments/environment';
import { constants } from '../../environments/constants';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class StrapiProductService { 

  constructor(
    private _httpClient : HttpClient,
    private languageService: LanguageService
  ) { }

  getData(){
    const language = this.languageService.getLanguage();
    return this._httpClient.get<Productss[]>(environment.apiurl + constants.getData,    
    {
      params: {
        populate: 'deep',
        locale: language
      }
    }).pipe
    (
      map((res :any) => {
        return res.data;
      })
    );
  }

}


























  // getAllProducts() : Observable<sProducts[]> {
  //   return this._httpClient.get<sProducts[]>('http://localhost:1337/api/products').pipe(map(response => ));
  // }


  // getProducts(): Observable<sProducts[]> {
  //   return this.http.get<any>(`${this.apiUrl}`)
  //     .pipe(
  //       map(response => response.data)
  //     );
  // }