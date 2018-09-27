import { Component, OnInit, Inject } from '@angular/core';
import { PurchaseOrder } from '../model/purchase-order';
import { PoItem } from '../model/po-item';
import { FormGroup, FormBuilder, FormArray } from '../../../node_modules/@angular/forms';
import { PurchaseOrderService } from '../service/purchase-order.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';
import { Supplier } from '../model/supplier';

@Component({
  selector: 'app-pocreate-dialog',
  templateUrl: './pocreate-dialog.component.html',
  styleUrls: ['./pocreate-dialog.component.css']
})
export class POCreateDialogComponent implements OnInit {

  purchaseOrder : FormGroup;
  selectedSupplier : Supplier;
  buildPOForm() {
    return this.fb.group({
      invoiceNumber : [''],
      receivedDate : [''],
      deliveryDate :[''],
      otherDetails : [''],

      purchaseOrderItems : this.fb.array([
        this.fb.group({
          productId:[''],
          unitAmount : [''],
          unitPurchasePrice :[''],
        })
      ])
    });
  }


  constructor(
    private fb : FormBuilder,
    private poService : PurchaseOrderService,
    public dialogRef: MatDialogRef<POCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data

  ) {
  }

  ngOnInit() {
    this.purchaseOrder = this.buildPOForm();
    this.selectedSupplier = this.data;
  }
  save() {
    const respo : PurchaseOrder = Object.assign({},this.purchaseOrder.value );
    respo.purchaseOrderItems = Object.assign([], respo.purchaseOrderItems);
    respo.supplierId = this.selectedSupplier.id;
    let savePO = new PurchaseOrder();
    this.poService.addPO(respo).subscribe(data => {
      console.log(data)
      savePO = data
    });
    this.dialogRef.close("Saved");
  }

  cancel() {
    this.dialogRef.close("Cancel");
  }
  onNoClick(): void {
    console.log("OnNoclick");
  }


  get itemForms() {
    return this.purchaseOrder.get('purchaseOrderItems') as FormArray;
  }

  addPoItem() {
    const poitem = this.fb.group({ 
      productId: [''],
      unitAmount: [''],
      unitPurchasePrice: [''],
    })

    this.itemForms.push(poitem);
  }

  deletePoItem(i) {
    this.itemForms.removeAt(i)
  }
}
