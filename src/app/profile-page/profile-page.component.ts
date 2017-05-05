import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../_services/user.service";
import {User} from "../_models/user";
import {AuthService} from "../_services/auth.service";
@Component({
  selector: 'fd-profile-page',
  templateUrl: './profile-page.component.html',
  styles: [require('../../styles.css').toString()]
})
export class ProfilePageComponent implements OnInit {
  navn: string;
  email: string;
  adresse: string;
  phone: string;
  by: string;
  postnummer: string;

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.userService.getClient().subscribe(
      user => {
        console.log(JSON.stringify(user));
        if (user) {
          this.userService.user = user;
          this.updateForm();
          this.userService.updateUserUI();
        }
        else {
          console.log("No profile in database. Loading information from authentication provider.");
          this.userService.user = new User();
          this.userService.user.UID = this.authService.getAuth().currentUser.uid;
          if (this.authService.getAuth().currentUser.providerData[0].email)
            this.userService.user.email = this.authService.getAuth().currentUser.providerData[0].email;
          else
            this.userService.user.email = this.authService.getAuth().currentUser.email;
          if (this.authService.getAuth().currentUser.providerData[0].displayName)
            this.userService.user.name = this.authService.getAuth().currentUser.providerData[0].displayName;
          this.updateForm();
          this.userService.updateUserUI();
          //console.log(JSON.stringify(this.userService.user));
        }
      }
    )
  }

  updateForm() {
    this.navn = this.userService.user.name;
    this.email = this.userService.user.email;
    this.adresse = this.userService.user.address;
    this.phone = this.userService.user.phone;
    this.by = this.userService.user.city;
    this.postnummer = this.userService.user.zip;
  }

  onSubmit(f: NgForm) {

    if (f.valid)
    this.userService.updateUser(
      f.value.name,
      f.value.email,
      f.value.phone,
      f.value.address,
      f.value.zip,
      f.value.city);
  }
}
