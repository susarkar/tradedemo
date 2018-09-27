import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';

import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { CompanyComponent } from './company/company.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ProductComponent } from './product/product.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { ReportComponent } from './report/report.component';
import { ProductCreateDialogComponent } from './product-create-dialog/product-create-dialog.component';
import { CompanyCreateDialogComponent } from './company-create-dialog/company-create-dialog.component';
import { SupplierCreateDialogComponent } from './supplier-create-dialog/supplier-create-dialog.component';
import { POCreateDialogComponent } from './pocreate-dialog/pocreate-dialog.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ManufacturerDialogComponent } from './manufacturer-dialog/manufacturer-dialog.component';
import { PurchaseOrderItemComponent } from './purchase-order-item/purchase-order-item.component';
import { PurchaseOrderListComponent } from './purchase-order-list/purchase-order-list.component';
import { CustomerCreateDialogComponent } from './customer-create-dialog/customer-create-dialog.component';
import { OrderCreateDialogComponent } from './order-create-dialog/order-create-dialog.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CompanyComponent,
    SupplierComponent,
    ProductComponent,
    PurchaseOrderComponent,
    SalesOrderComponent,
    ReportComponent,
    ProductCreateDialogComponent,
    CompanyCreateDialogComponent,
    SupplierCreateDialogComponent,
    POCreateDialogComponent,
    ManufacturerComponent,
    ManufacturerDialogComponent,
    PurchaseOrderItemComponent,
    PurchaseOrderListComponent,
    CustomerCreateDialogComponent,
    OrderCreateDialogComponent,
    CustomerComponent,
    OrderComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [
    ManufacturerDialogComponent,
    ProductCreateDialogComponent,
    CompanyCreateDialogComponent,
    SupplierCreateDialogComponent,
    POCreateDialogComponent,
  CustomerCreateDialogComponent,
  OrderCreateDialogComponent,
  
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
