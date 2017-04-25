import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {ServerService} from "./_services/server.service";
import database = firebase.database;

@Component({
  selector: 'fd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private serverService: ServerService) {

  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAYoXaVqer-feXLG-zIN0avkvbxDVYtzq4",
      authDomain: "favordrop.firebaseapp.com",
      databaseURL: "https://favordrop.firebaseio.com/"

    })
  }
}
