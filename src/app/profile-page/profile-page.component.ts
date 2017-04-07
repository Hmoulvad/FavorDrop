import {Component, OnInit, group} from '@angular/core';
import {ServerService} from "../server.service";
import {formGroupNameProvider} from "@angular/forms/src/directives/reactive_directives/form_group_name";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'fd-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  constructor(private serverService: ServerService) { }

  ngOnInit() {

  }
  userinfo() {

  }
  setnamedb(form: NgForm) {
      const name = form.value.name;
      const adress = form.value.name;
      //this.authService.signupUser(email, password);
  }

}
