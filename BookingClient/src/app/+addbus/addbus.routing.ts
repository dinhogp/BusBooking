import { Routes, RouterModule } from '@angular/router';
import {AddbusComponent} from "./addbus.component";
import {ModuleWithProviders} from "@angular/core";

export const addbusRoutes: Routes = [
    {
        path: '',
        component: AddbusComponent,
        data: {
            pageTitle: 'Addbus'
        }
    }
];

export const addbusRouting: ModuleWithProviders = RouterModule.forChild(addbusRoutes);