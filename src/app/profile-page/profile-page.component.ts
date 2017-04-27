import {Component, OnInit, group} from '@angular/core';
import {AuthService} from "../auth.service";

import {NgForm, FormGroup, FormBuilder, NgModel} from "@angular/forms";
import {UserService} from "../_services/user.service";
import {ServerService} from "../_services/server.service";
import {any} from "codelyzer/util/function";

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


  onSubmit(f: NgForm) {
    this.userService.updateUser(
      f.value.name,
      f.value.email,
      f.value.phone,
      f.value.address,
      f.value.zip,
      f.value.city);
    const email = f.value.email;
    const name = f.value.name;
    console.log(this.userService.getUser());  //{ first: '', last: '' }
    this.CreateinDB(f.value);
    //console.log(f.control.get("Navn"));
  }

  //her sendes de lokale strings videre til metoden i ServerService for oprette i DB.
    CreateinDB(any){
    this.serverService.CreateUserInDB(any)
      .subscribe(
        data => console.log(data))
    }

}
