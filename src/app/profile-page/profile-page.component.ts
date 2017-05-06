import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../_services/user.service";

@Component({
  selector: 'fd-profile-page',
  templateUrl: './profile-page.component.html',
  styles: [require('../../styles.css').toString()]
})
export class ProfilePageComponent implements OnInit {
  formname: string;
  formemail: string;
  formphone: number;
  formadress: string;
  formzip: string;
  formcity: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log("Profile onInit: " + JSON.stringify(this.userService.user));
    this.formname = this.userService.user.name;
    this.formemail = this.userService.user.email;
    this.formadress = this.userService.user.address;
    this.formphone = this.userService.user.phone;
    this.formcity = this.userService.user.city;
    this.formzip = this.userService.user.zip;
  }

  onSubmit(f: NgForm) {
    if (f.valid)
    this.userService.updateUser(
      this.formname,
      this.formemail,
      this.formphone,
      this.formadress,
      this.formzip,
      this.formcity);
  }

}
