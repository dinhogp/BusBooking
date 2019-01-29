import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addbusRouting } from './addbus.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {AddbusComponent} from "./addbus.component";
import {SmartadminValidationModule} from "../shared/forms/validation/smartadmin-validation.module";
import {SmartadminInputModule} from "../shared/forms/input/smartadmin-input.module";
import { BsDatepickerModule, DatepickerModule } from '../../../node_modules/ngx-bootstrap';
import { UiDatepickerDirective } from '../shared/forms/input/ui-datepicker.directive';


@NgModule({
  imports: [
    CommonModule,
    addbusRouting,
    SmartadminModule,
    SmartadminValidationModule,
    SmartadminInputModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    
    
  ],
  declarations: [AddbusComponent],

  
})
export class AddbusModule { }