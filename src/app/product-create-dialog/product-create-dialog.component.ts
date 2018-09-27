import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';
import { CompanyService } from '../service/company.service';
import { Company } from '../model/company';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-create-dialog',
  templateUrl: './product-create-dialog.component.html',
  styleUrls: ['./product-create-dialog.component.css']
})
export class ProductCreateDialogComponent implements OnInit {
  companyName = new FormControl();
  filteredCompanies: Company[];
  model:Product = new Product();
  
  constructor(
    public dialogRef: MatDialogRef<ProductCreateDialogComponent>,
    //@Inject(MAT_DIALOG_DATA) public data: DialogData
    private companyService: CompanyService, 
    private productService : ProductService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.companyName.valueChanges
      .subscribe(val => {
        console.log("Search for = " + val);
        if (val && typeof val !== 'object') {
          this.companyService.searchCompanyByName(val).subscribe(results => {
            console.log(results);
            this.filteredCompanies = results;

          });
        }
      });
  }
  save() {
    console.log(this.model);
    this.productService.addProduct(this.model).subscribe();
    this.dialogRef.close("Save");

  }

  cancel() {
    this.dialogRef.close("Cancel");

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
