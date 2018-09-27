import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm : FormGroup ;
  autoSearch: FormControl = new FormControl();

  products : Product[] = [];
  constructor(
    private fb : FormBuilder,
    private productService : ProductService,
  ) { }

  ngOnInit() {
    this.autoSearch.valueChanges.subscribe(searchTerm => {
      this.productService.searchProduct(searchTerm).subscribe(data =>this.products = data);
     });
    this.orderForm = this.buildOrderForm();
   // this.productService.getAllProducts().subscribe(data=> this.products=data);
  }

get orderItemForms () {
  return this.orderForm.controls.orderItemForms;
}

  buildOrderForm() {
    return this.fb.group({
      customerId : [''],
      orderItemForms : this.fb.array([
        this.fb.group({
          productId:[''],
          amount :['']
        }),
        this.fb.group({
          productId:['4'],
          amount :['22']
        }),
        this.fb.group({
          productId:[''],
          amount :['']
        }),
        this.fb.group({
          productId:[''],
          amount :['']
        }),
        this.fb.group({
          productId:[''],
          amount :['']
        })
      ])
    })
  }


}
