import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ProductComponent } from './product/product.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { ReportComponent } from './report/report.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'order', component: OrderComponent},

  { path: 'manufacturer', component: ManufacturerComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'company', component: CompanyComponent},
  { path: 'supplier', component: SupplierComponent},
  { path: 'product', component: ProductComponent},
  { path: 'purchase-order', component: PurchaseOrderComponent},
  { path: 'sales-order', component: SalesOrderComponent},
  { path: 'report', component: ReportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
