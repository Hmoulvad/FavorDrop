import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../_services/user.service";
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

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log("Profile onInit: " + JSON.stringify(this.userService.user));
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
