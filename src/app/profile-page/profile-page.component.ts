import {Component, OnInit, group} from '@angular/core';
import {ServerService} from "../server.service";
import {formGroupNameProvider} from "@angular/forms/src/directives/reactive_directives/form_group_name";
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";


@Component({
  selector: 'fd-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  token: string = this.authService.token;

  constructor(private serverService: ServerService, private authService: AuthService) { }

  ngOnInit() {

  }
  userinfo() {

  }

  //her sendes de lokale strings videre til metoden i ServerService for oprette i DB.
    CreateinDB(token: string, name: string, email: string, phone: number){
    this.serverService.CreateUserInDB({token: this.token, name: name, email: email, phone: phone})
      .subscribe(
        data => console.log(data))
    }
}
