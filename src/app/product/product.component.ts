import { Component, OnInit } from '@angular/core';
import { MatOptionSelectionChange, MatDialog } from '../../../node_modules/@angular/material';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { FormControl } from '../../../node_modules/@angular/forms';
import { ManufacturerService } from '../service/manufacturer.service';
import { Manufacturer } from '../model/manufacturer';
import { ProductCreateDialogComponent } from '../product-create-dialog/product-create-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : Product[] = [];
  model : Product = new Product();
  autoSearch : FormControl = new FormControl();
  manufacturers:Manufacturer[] = [];
selectedTab = 0;

  constructor(
    private dialog : MatDialog,
    public productService:ProductService,
    private manuService : ManufacturerService,
  ) { }

  ngOnInit() {
    this.loadData();
    this.autoSearch.valueChanges.subscribe(searchString => this.searchManufacturer(searchString));
  }

  searchManufacturer(name:string){
    console.log("search : " + name);
    this.manuService.searchManufacturers(name).subscribe(data => this.manufacturers=data);
    console.log(this.manufacturers);
  }

  loadData(searchString ?: string) {
    if(searchString ){
      this.productService.searchProduct(searchString ).subscribe(data => this.products = data);

    }else{
      this.productService.getAllProducts().subscribe(data => this.products=data);

    }
  }

  rowClicked(row : Product){
    this.model=row;
    this.selectedTab=1;
  }

  saveProduct(){
    this.productService.addProduct(this.model).subscribe();
    this.loadData();
  }
  onOptionSelected(event: MatOptionSelectionChange, manufacturer:Manufacturer){
    if (event.source.selected) {
      console.log("Selected Manufacturer = "+manufacturer);
      this.model.manufacturerId = manufacturer.id;
    }
  }
  searchProduct(searchString : string){
    this.loadData(searchString);

  }

  openDialog(row ? : Product) {
    const dialogRef = this.dialog.open(ProductCreateDialogComponent, {
      width: '300px',
      data: row ? row : new Product()
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result === "saved"){
        console.log("recalling the getCompanies");
        this.loadData();
      }

    });
  }
}
