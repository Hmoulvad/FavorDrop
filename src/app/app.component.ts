import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'fd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAYoXaVqer-feXLG-zIN0avkvbxDVYtzq4",
      authDomain: "favordrop.firebaseapp.com"
    })
  }
}
