import { Component, OnInit, HostBinding } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'fd-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

  state: string='';
  error : any;

  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/members')
      }
    });
  }

  onSubmit(formData) {
    if(formData.valid) {
    console.log(formData.value);
    this.af.auth.login({
      email: formData.value.email,
        password: formData.value.password
    },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then(
      (succes) => {
        console.log(succes);
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        console.log(err);
        this.error = err
      })
    }
  }

  ngOnInit() {
  }

}
