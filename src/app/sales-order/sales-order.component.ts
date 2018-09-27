import { Component, OnInit } from '@angular/core';
import { FormControl } from '../../../node_modules/@angular/forms';
import { SoItem } from '../model/so-item';
import { SalesOrder } from '../model/sales-order';
import { Customer } from '../model/customer';
import { MatDialog } from '../../../node_modules/@angular/material';
import { CustomerCreateDialogComponent } from '../customer-create-dialog/customer-create-dialog.component';
import { OrderCreateDialogComponent } from '../order-create-dialog/order-create-dialog.component';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {
  autoSearch: FormControl = new FormControl();
  customers:Customer[] = [];
  orders:any=[];
  orderItems : any [];

  constructor(
    private dialog: MatDialog,
    private customerService : CustomerService,

  ) { }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(data => this.customers= data);
  }

  addCustomer(){
    const dialogRef = this.dialog.open(CustomerCreateDialogComponent, {
      width: '500px'
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result === "saved"){
        console.log("recalling the getCompanies");
      }

    });
  }

  addOrder(){
    const dialogRef = this.dialog.open(OrderCreateDialogComponent, {
      width: '500px'
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result === "saved"){
        console.log("recalling the getCompanies");
      }

    });    
  }
}
