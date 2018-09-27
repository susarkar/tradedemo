import { Component, OnInit, Input } from '@angular/core';
import { Supplier } from '../model/supplier';
import { PurchaseOrder } from '../model/purchase-order';
import { PurchaseOrderService } from '../service/purchase-order.service';

@Component({
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.css']
})
export class PurchaseOrderListComponent implements OnInit {
 @Input() supplier : Supplier;

 poOrders : PurchaseOrder[] ;
  constructor(
    private poService: PurchaseOrderService

  ) { }

  ngOnInit() {
    this.poService.getPosBySupplier(this.supplier).subscribe(data => this.poOrders=data);
  }

}
