import { Routes, RouterModule } from '@angular/router';
import {BuslistComponent} from "./buslist.component";
import {ModuleWithProviders} from "@angular/core";

export const buslistRoutes: Routes = [
    {
        path: '',
        component: BuslistComponent,
        data: {
            pageTitle: 'Buslist'
        }
    }
];

export const buslistRouting: ModuleWithProviders = RouterModule.forChild(buslistRoutes);