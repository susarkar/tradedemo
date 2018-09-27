import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Product } from '../model/product';
import { of } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = '/tradeapi/product';
  constructor(private http : HttpClient) { }

  addProduct(product:Product){
    return this.http.post<Product>(this.productUrl, product);
  }
  getAllProducts(){
    return this.http.get<Product[]>(this.productUrl);
  }
  searchProduct(name:string){
    return this.http.get<Product[]>(this.productUrl + "/search/" + name);
  }
}
