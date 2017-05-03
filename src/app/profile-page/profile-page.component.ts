import {Component, OnInit, group} from '@angular/core';
import {AuthService} from "../_services/auth.service";
import {NgForm} from "@angular/forms";
import {UserService} from "../_services/user.service";
@Component({
  selector: 'fd-profile-page',
  templateUrl: './profile-page.component.html',
  styles: [require('../../styles.css').toString()]
})
export class ProfilePageComponent implements OnInit {
  navn: string;
  email: string;
  adresse: string;
  telefon: string;
  by: string;
  postnummer;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.navn = "Fulde navn";
    this.email= "Email";
    this.adresse = "Adresse";
    this.telefon = "Telefonnummer";
    this.by= "By";
    this.postnummer= "Postnummer";

    if(this.userService.user != null) {
    this.navn  = this.userService.user.name;
    this.email = this.userService.user.email;
    this.adresse = this.userService.user.address;
    this.telefon = this.userService.user.phone;
    this.by = this.userService.user.city;
    this.postnummer = this.userService.user.phone;
    }
  }

  onSubmit(f: NgForm) {
    this.userService.updateUser(
      this.authService.getUserID(),
      f.value.name,
      f.value.email,
      f.value.phone,
      f.value.address,
      f.value.zip,
      f.value.city);
    console.log(this.userService.getUser());  //{ first: '', last: '' }
    this.CreateinDB(f.value);
  }

    CreateinDB(any){
    this.userService.CreateUserInDB(any)
      .subscribe(
        data => console.log(data))
    }

}
