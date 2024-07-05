import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { PostProduct } from '../models/postProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient : HttpClient) { }

  getAllProducts() : Observable<Product[]> {
    return this._httpClient.get<Product[]>('https://fakestoreapi.com/products');
  }

  addProduct(product : PostProduct) : Observable<string> {
    return this._httpClient.post('https://fakestoreapi.com/products', product, {responseType : 'text'})
  }
}
