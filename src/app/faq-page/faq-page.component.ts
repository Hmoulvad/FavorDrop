import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fd-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent implements OnInit {
  fullImagePath: string;
  constructor() {
    this.fullImagePath = 'assets/faqmidlertidlig.png'
  }

  ngOnInit() {
  }

}
