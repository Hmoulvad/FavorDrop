import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'fd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private authService: AuthService) { }

  name: string = this.authService.name;

  authcheck() {
    this.authService.isAuthenticated();
  }
  logout(){
      this.authService.logout();
    }
   ngOnInit() {
  }
}
