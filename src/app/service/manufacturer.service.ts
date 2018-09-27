import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Manufacturer } from '../model/manufacturer';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  url = "/tradeapi/manufacturer";

  constructor(
    private http:HttpClient
  ) { }

  getTenManufacturers(){
    return this.http.get<Manufacturer[]>(this.url+"/topten");

  }
  searchManufacturers(searchString : string){
    return this.http.get<Manufacturer[]>(this.url+'/search/'+searchString);
  }

  addManufacturer(model : Manufacturer){
    console.log(model);
    return this.http.post<Manufacturer>(this.url,model);
  }
  editManufacturer(model:Manufacturer){
    return this.http.put<Manufacturer>(this.url,model);
  }
}
