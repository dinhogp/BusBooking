import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  redirectDelay = 0;
  showMessages: any = {};
  provider = '';

  errors: string[] = [];
  messages: string[] = [];
  user:User;
  submitted = false;
  constructor(private router: Router,private authservice:AuthenticationService) { }

  ngOnInit() {
    this.user = new User();
  }

  login(event){
    //event.preventDefault();
    

    this.errors = this.messages = [];
    // this.submitted = true;
    // this.user.grant_type = 'password';
    this.authservice.login(this.user.username, this.user.password)
        .subscribe(ret => {
          
            this.submitted = false;
            this.router.navigate(['/main']);
        }, err => {
            this.submitted = false;
            this.errors.push(err);
            alert(err);
        });
  }

}

class User{
  username:string;
  password:string;
}
