import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Supplier } from '../model/supplier';
import { of, Observable } from '../../../node_modules/rxjs';
import { Resp } from '../model/resp';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  supplierUrl = "/tradeapi/supplier";

  constructor(public http:HttpClient ) { }

  addSupplier(supplier : Supplier){
      return this.http.post<Supplier>(this.supplierUrl, supplier);
  }

  getAllSuppliers(){
    return this.http.get<Supplier[]>(this.supplierUrl);
  } 
  
  searchSupplier(name:string){
    return this.http.get<Supplier[]>(this.supplierUrl  + "/search/" + name);

  }


 getSuppliers(sort: string, order: string, page: number, size=5): Observable<Resp>{
    return this.http.get<Resp>(this.supplierUrl+"/pagination?" + `size=${size}&sort=${sort},${order}&page=${page}`);

  }
  
}
