import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductTestService {

  private API_URL = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(this.API_URL);
  }

  getProductById(id : number) {
    return this.http.get(`${this.API_URL}/${id}`);
  }
}
