import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerUrl = "/tradeapi/customer";
  constructor(
    private http: HttpClient
  ) { }

  addCustomer(customer? : Customer){
    return this.http.post<Customer>(this.customerUrl, customer);
  }
  getAllCustomers(){
    return this.http.get<Customer[]>(this.customerUrl);
  }

  getCustomers(str?: string) {
    return (!str) ? this.http.get<Customer[]>(this.customerUrl):this.http.get<Customer[]>(this.customerUrl + "?searchString=" + str);
  }
}
