import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/auth.service";

@Component({
  selector: 'fd-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {


  constructor(private authService: AuthService) { }

  authcheck() {
    return !!sessionStorage.getItem('currentUser');
  }
  logout(){
      this.authService.logout();
    }
   ngOnInit() {
  }
}
