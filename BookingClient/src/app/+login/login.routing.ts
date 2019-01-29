import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import { LoginComponent } from './login.component';

export const loginRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: {
            pageTitle: 'Log In'
        }
    }
];

export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);