/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {ModuleWithProviders} from "@angular/core";
import { LoginComponent } from './+login/login.component';
import { AddbusComponent} from './+addbus/addbus.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: {pageTitle: 'Log In'},
    },
    {
        path: 'main',
        component: MainLayoutComponent,
        children: [
            {
                path: '', redirectTo: 'home', pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: 'app/+home/home.module#HomeModule'
            },
            {
                path: 'datatable',
                loadChildren: 'app/+ngx-datatable/ngx-datatable-case.module#NgxDatatableCaseModule'
            },
            {
                path: 'test',
                loadChildren: 'app/+test/test.module#TestModule'
            },
            {
                path: 'addbus',
                loadChildren: 'app/+addbus/addbus.module#AddbusModule'
            },

        ]
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
