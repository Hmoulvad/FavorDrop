import {Component, OnInit, group} from '@angular/core';
import {AuthService} from "../auth.service";

import {NgForm, FormGroup, FormBuilder} from "@angular/forms";
import {UserService} from "../_services/user.service";
import {ServerService} from "../_services/server.service";

@Component({
  selector: 'fd-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  form: FormGroup;


  constructor(private serverService: ServerService, private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
  }

  CreateinDB(){
    console.log(""+this.userService.name);
    console.log(this.userService.email);
  }


  //her sendes de lokale strings videre til metoden i ServerService for oprette i DB.
  //   CreateinDB(){
  //   this.
  //   this.serverService.CreateUserInDB(this.Utoken, this.Uname, this.Umail, this.Uphone, this.Uadress, this.Ucity, this.Uzip)
  //     .subscribe(
  //       data => console.log(data))
  //   }

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const email = form.value.Email;
    console.log(email);
}
}
