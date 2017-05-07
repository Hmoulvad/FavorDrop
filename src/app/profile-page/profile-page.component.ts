import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../_services/user.service";
/*
  ProfilePageComponent - Som viser brugeren data, og giver mulighed for at ændre den.
 */
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
/*
  OnInit indlæses data til formen fra user objektet.
 */
  ngOnInit() {
    this.formname = this.userService.user.name;
    this.formemail = this.userService.user.email;
    this.formadress = this.userService.user.address;
    this.formphone = this.userService.user.phone;
    this.formcity = this.userService.user.city;
    this.formzip = this.userService.user.zip;
  }
/*
  onSubmit metoden gemmer input fra form til user objekt.
 */
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
