import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../service/supplier.service';
import { MatDialogRef } from '../../../node_modules/@angular/material';
import { Supplier } from '../model/supplier';

@Component({
  selector: 'app-supplier-create-dialog',
  templateUrl: './supplier-create-dialog.component.html',
  styleUrls: ['./supplier-create-dialog.component.css']
})
export class SupplierCreateDialogComponent implements OnInit {
model : Supplier = new Supplier();
  constructor(
    public supplierServie : SupplierService,
    public dialogRef: MatDialogRef<SupplierCreateDialogComponent>,

  ) { }

  ngOnInit() {
  }
  save() {
    this.supplierServie.addSupplier(this.model).subscribe();
    this.dialogRef.close("save");
  }

  cancel() {
    this.dialogRef.close("Cancel");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
