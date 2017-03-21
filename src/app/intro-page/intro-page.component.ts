import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fd-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css']
})
export class IntroPageComponent implements OnInit {
  midlertidlig: string;

  constructor() {
    this.midlertidlig = 'assets/fdprocesbillede.png';

  }

  ngOnInit() {
  }


}
