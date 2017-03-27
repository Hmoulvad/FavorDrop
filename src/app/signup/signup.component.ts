import {Component, OnInit, HostBinding, Input} from '@angular/core';
import { moveIn, fallIn } from '../router.animations';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import {link} from "fs";

@Component({
  selector: 'fd-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

  state: string='';
  error : any;
  @Input() name : string='';

  constructor(public  af: AngularFire, private router: Router) { }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (succes) => {
          console.log(succes);
          this.router.navigate(['/login'])
        }).catch(
        (err) => {
          console.log(err)
          this.error = err;
        }
      )
    }
  }

  ngOnInit() {
  }

}
