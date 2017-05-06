import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../_services/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'fd-create-user',
  templateUrl: 'create-intro.component.html',
  styles: [require('../../../styles.css').toString()]
})
export class CreateUserComponent implements OnInit {

  constructor(private authService: AuthService, private  rout: Router, private userservice: UserService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.emailSignup(email, password);
    this.rout.navigate(['/user-login']);
    this.userservice.user.email = email;
  }
}
