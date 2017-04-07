import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'fd-create-user',
  templateUrl: 'create-intro.component.html',
  styleUrls: ['create-intro.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }

}
