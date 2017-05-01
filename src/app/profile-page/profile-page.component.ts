import {Component, OnInit, group} from '@angular/core';
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";
import {UserService} from "../_services/user.service";
import {ServerService} from "../_services/server.service";

@Component({
  selector: 'fd-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  navn: string;
  email: string;
  adresse: string;
  telefon: string;
  by: string;
  postnummer;

  constructor(private serverService: ServerService, private authService: AuthService, private userService: UserService) { }

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
    const email = f.value.email;
    const name = f.value.name;
    console.log(this.userService.getUser());  //{ first: '', last: '' }
    this.CreateinDB(f.value);
    //console.log(f.control.get("Navn"));
  }

    CreateinDB(any){
    this.serverService.CreateUserInDB(any)
      .subscribe(
        data => console.log(data))
    }

}
