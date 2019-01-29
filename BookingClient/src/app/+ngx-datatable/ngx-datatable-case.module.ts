import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatsModule} from "../shared/stats/stats.module";
import { datatableRouting } from './ngx-datatable-case-routing.module';
import {NgxDatatableCaseComponent} from "./ngx-datatable-case.component";
import {SmartadminModule} from "../shared/smartadmin.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { RowDetailComponent } from './row-detail/row-detail.component';
import { PagedTableComponent } from './paged-table/paged-table.component';



@NgModule({
  imports: [
    CommonModule,
    datatableRouting,
    NgxDatatableModule,
    SmartadminModule,
    StatsModule
  ],
  declarations: [NgxDatatableCaseComponent, RowDetailComponent, PagedTableComponent]
})
export class NgxDatatableCaseModule { }
