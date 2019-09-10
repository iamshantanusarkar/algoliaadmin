import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { CustomerReportComponent } from './customer/customer-report.component';
import { OrderReportComponent } from './order/order-report.component';



@NgModule({
  declarations: [
    ReportsComponent,
    CustomerReportComponent,
    OrderReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
  ],
  entryComponents: [ReportsComponent]
})
export class ReportsModule { }
