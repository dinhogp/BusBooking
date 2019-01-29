import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { testRouting } from './test.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {TestComponent} from "./test.component";
import {StatsModule} from "../shared/stats/stats.module";

@NgModule({
  imports: [
    CommonModule,
    testRouting,
    SmartadminModule,
    StatsModule

  ],
  declarations: [TestComponent]
})
export class TestModule { }
