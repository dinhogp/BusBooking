import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { buslistRouting } from './buslist.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {BuslistComponent} from "./buslist.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";

@NgModule({
  imports: [
    CommonModule,
    buslistRouting,
    SmartadminModule,
    NgxDatatableModule
  ],
  declarations: [BuslistComponent]
})
export class BuslistModule { }