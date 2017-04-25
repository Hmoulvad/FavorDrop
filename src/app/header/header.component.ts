import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {UserService} from "../_services/user.service";

@Component({
  selector: 'fd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private authService: AuthService, private user: UserService) { }

  name: string = this.user.name;

  authcheck() {
    this.authService.isAuthenticated();
  }
  logout(){
      this.authService.logout();
    }
   ngOnInit() {
  }
}
