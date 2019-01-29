import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgxDatatableCaseComponent} from "./ngx-datatable-case.component";
import {ModuleWithProviders} from "@angular/core";

export const datatableRoutes: Routes = [{
  path: '',
  component: NgxDatatableCaseComponent,
  data: {
    pageTitle: 'Datatable'
}
}];

/*@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})*/
//export class NgxDatatableCaseRoutingModule { }
export const datatableRouting: ModuleWithProviders = RouterModule.forChild(datatableRoutes);
