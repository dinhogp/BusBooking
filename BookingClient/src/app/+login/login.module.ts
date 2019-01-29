import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { loginRouting } from './login.routing';
import { FormsModule } from '../../../node_modules/@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    loginRouting,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
