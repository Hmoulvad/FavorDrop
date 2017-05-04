import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../_services/user.service";
import {User} from "../_models/user";
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
    this.userService.getClient().subscribe(
      user => {
        this.userService.user = user;
        this.updateForm();
        console.log("getUser: " + JSON.stringify(user));
        console.log("userService object: + " + JSON.stringify(this.userService.user));
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
    this.userService.updateUser(
      f.value.name,
      f.value.email,
      f.value.phone,
      f.value.address,
      f.value.zip,
      f.value.city);
  }
}
