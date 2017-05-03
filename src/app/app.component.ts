import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import database = firebase.database;

@Component({
  selector: 'fd-root',
  templateUrl: './app.component.html',
  styles: [require('../styles.css').toString()]
})
export class AppComponent implements OnInit{

  constructor() {

  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAYoXaVqer-feXLG-zIN0avkvbxDVYtzq4",
      authDomain: "favordrop.firebaseapp.com",
      databaseURL: "https://favordrop.firebaseio.com/"

    })
  }
}
