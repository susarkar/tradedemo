import { Injectable } from '@angular/core';
import { PurchaseOrder } from '../model/purchase-order';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { PoItem } from '../model/po-item';
import { Observable, of, BehaviorSubject, Subject } from '../../../node_modules/rxjs';
import { Supplier } from '../model/supplier';
import { map, tap } from '../../../node_modules/rxjs/operators';

const INIT_DATA = [];

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  poUrl = "/tradeapi/purchase-order";

  private dataStore:BehaviorSubject<PurchaseOrder[]> = new BehaviorSubject(null);
  poOrders$: Observable<PurchaseOrder[]> = this.dataStore.asObservable();

  constructor(
    public http: HttpClient
  ) { }



  updateData(supplier?: Supplier) {
    console.log(supplier.id);
    if (!supplier){
      return null;
    }
    this.http.get<PurchaseOrder[]>(this.poUrl + "/supplier/" + supplier.id).pipe(
     tap(result => this.dataStore.next(result))
      
    )

  }


  getPosBySupplier(supplier: Supplier) {
    return this.http.get<PurchaseOrder[]>(this.poUrl + "/supplier/" + supplier.id);
  }
  getAllPOs() {
    return this.http.get<PurchaseOrder[]>(this.poUrl);
  }

  addPO(po: PurchaseOrder) {
    console.log(JSON.stringify(po));
    return this.http.post<PurchaseOrder>(this.poUrl, po);
  }

  searchPO(searchString: string) {
    return this.http.get<PurchaseOrder[]>(this.poUrl + "/search/" + searchString);

  }

  getAllPOItems() {
    return this.http.get<PoItem[]>(this.poUrl + "/poitems");
  }
}
