import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { MatDialog } from '@angular/material';
import { Customer } from '../model/customer';
import { CustomerCreateDialogComponent } from '../customer-create-dialog/customer-create-dialog.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

customers : Customer[] = [];

  constructor(
    private customerService:CustomerService,
    private dialog : MatDialog,

  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(searchString ?:string) {
  
      this.customerService.getCustomers(searchString ).subscribe(data => this.customers = data);

  }
  filter(str : string){
    this.loadData(str);
  }
  openDialog(row ? : Customer) {
    const dialogRef = this.dialog.open(CustomerCreateDialogComponent, {
      width: '300px',
      data: row ? row : new Customer()
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result === "saved"){
        console.log("recalling the getCompanies");
        this.loadData();
      }
    });
  }
}
