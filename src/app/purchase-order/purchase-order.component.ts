import { Component, OnInit, ViewChild } from '@angular/core';
import { PurchaseOrder } from '../model/purchase-order';
import { MatDialog, MatOptionSelectionChange, MatTableDataSource, MatTable, MatPaginator, MatSort } from '../../../node_modules/@angular/material';
import { PurchaseOrderService } from '../service/purchase-order.service';
import { POCreateDialogComponent } from '../pocreate-dialog/pocreate-dialog.component';
import { CompanyService } from '../service/company.service';
import { Company } from '../model/company';
import { FormControl, FormBuilder, FormGroup, FormArray } from '../../../node_modules/@angular/forms';
import { SupplierService } from '../service/supplier.service';
import { Supplier } from '../model/supplier';
import { PoItem } from '../model/po-item';
import { Observable, of, pipe, Subject } from '../../../node_modules/rxjs';
import { DataSource } from '../../../node_modules/@angular/cdk/table';
import { SoItem } from '../model/so-item';
import { forEach, andObservables } from '../../../node_modules/@angular/router/src/utils/collection';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap } from '../../../node_modules/rxjs/operators';
import { SupplierCreateDialogComponent } from '../supplier-create-dialog/supplier-create-dialog.component';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})

export class PurchaseOrderComponent implements OnInit {
  suppliers: Supplier[];
  autoSearch: FormControl = new FormControl();
  purchaseOrders$: Observable<PurchaseOrder[]>;
  selectedSupplier = new Subject<Supplier>();
  supplierSelected: Supplier ;
  purchaseOrders: any= [];
  panelOpenState = false;
  constructor(
    private supplierServicce: SupplierService,
    private poService: PurchaseOrderService,
    private fb: FormBuilder,
    private dialog: MatDialog

  ) { }
  createPOItemForm(): FormGroup {
    return this.fb.group({
      productName :[],
      unitAmount :[],
      unitPurchasePrice:[]
    });
  }

  ngOnInit() {

    this.autoSearch.valueChanges.subscribe(searchTerm => {
      this.supplierServicce.searchSupplier(searchTerm).subscribe(data =>this.suppliers = data);
     });

    this.purchaseOrders$ = this.selectedSupplier.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((sup: Supplier) => this.poService.getPosBySupplier(sup)),
    );
    this.selectedSupplier;
    this.purchaseOrders$.subscribe(data => this.purchaseOrders=data);
  }
  addSupplier(){
    const dialogRef = this.dialog.open(SupplierCreateDialogComponent, {
      width: '500px'
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result === "saved"){
        console.log("recalling the getCompanies");
      }

    });
  }
  onOptionSelected(event: MatOptionSelectionChange, supplier: Supplier) {
    if (event.source.selected) {
      this.selectedSupplier.next(supplier);
      this.supplierSelected = supplier;
    }
  }

  addPO(){
    const dialogRef = this.dialog.open(POCreateDialogComponent, {
      width: '800px',
      data : this.supplierSelected
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result === "saved"){
        console.log("recalling the getCompanies");
      }

    });
  }

  icon: boolean = false;

click(){
    this.icon = !this.icon;
  }
}
