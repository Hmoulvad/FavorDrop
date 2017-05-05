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
        if (user) {
          this.userService.user = user;
          this.updateForm();
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
          console.log(JSON.stringify(this.userService.user));
        }
      }
    )
  }

  updateForm() {
    if (this.userService.user.name)
      this.navn = this.userService.user.name;
    if (this.userService.user.email)
      this.email = this.userService.user.email;
    if (this.userService.user.address)
      this.adresse = this.userService.user.address;
    if (this.userService.user.phone)
      this.phone = this.userService.user.phone;
    if (this.userService.user.city)
      this.by = this.userService.user.city;
    if (this.userService.user.zip)
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
