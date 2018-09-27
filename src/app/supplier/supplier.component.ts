import { Component, OnInit, ViewChild } from '@angular/core';
import { Supplier } from '../model/supplier';
import { SupplierService } from '../service/supplier.service';
import { MatDialog, MatPaginator, MatSort } from '../../../node_modules/@angular/material';
import { SupplierCreateDialogComponent } from '../supplier-create-dialog/supplier-create-dialog.component';
import { merge, of } from '../../../node_modules/rxjs';
import { switchMap, catchError, map, startWith } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  suppliers : Supplier[] = [];
  model : Supplier = new Supplier();

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  displayedColumns: string[] = ['id', 'name', 'phone','email', 'otherDetails'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

selectedTab = 0;

  constructor(
    private dialog: MatDialog,

    public supplierService : SupplierService,
  ) { }

  ngOnInit() {
  this.loadData();

  }

  searchSupplier(searchString : string){
    console.log("Search String " + searchString);
    this.loadData(searchString);
  }


  loadData(searchString ?:string) {
    
    if(searchString ){
      this.supplierService.searchSupplier(searchString).subscribe(data => this.suppliers = data);
    }else{
      this.supplierService.getAllSuppliers().subscribe(data => this.suppliers = data);
    }
  }

  saveSupplier(){
    console.log(this.model);
    this.supplierService.addSupplier(this.model).subscribe();
    this.loadData();
  }
  rowClicked(row : Supplier){
    this.model = row;
    this.selectedTab = 1;
  }

  openDialog(row ? : Supplier) {
    const dialogRef = this.dialog.open(SupplierCreateDialogComponent, {
      width: '300px',
      data: row ? row : new Supplier()
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result === "saved"){
        console.log("recalling the getCompanies");
        this.loadData();
      }

    });
  }
}
