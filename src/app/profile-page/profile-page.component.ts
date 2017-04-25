import {Component, OnInit, group} from '@angular/core';
import {ServerService} from "../server.service";
import {AuthService} from "../auth.service";
import {NgForm, NgModel} from "@angular/forms";


@Component({
  selector: 'fd-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  Utoken = this.authService.token;
  Uname: string = "Dave";
  Umail: string = "Davidjkristensen@gmail.com";
  Uphone: string = "22869252";
  Uadress: string = "Venedigvej";
  Ucity: string = "Copenhagen";
  Uzip: string = "2300";

  constructor(private serverService: ServerService, private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const email = form.value.Email;
    console.log(email);

    //her sendes de lokale strings videre til metoden i ServerService for oprette i DB.
    //   CreateinDB(){
    //   this.
    //   this.serverService.CreateUserInDB(this.Utoken, this.Uname, this.Umail, this.Uphone, this.Uadress, this.Ucity, this.Uzip)
    //     .subscribe(
    //       data => console.log(data))
    //   }
  }
}
