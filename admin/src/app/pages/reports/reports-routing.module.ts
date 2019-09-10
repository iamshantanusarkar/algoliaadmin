import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { CustomerReportComponent } from './customer/customer-report.component';
import { OrderReportComponent } from './order/order-report.component';


const routes: Routes = [
  { path: '', component: ReportsComponent },
  { path: 'customer', component: CustomerReportComponent },
  { path: 'order', component: OrderReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
