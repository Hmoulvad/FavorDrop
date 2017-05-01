import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fd-order-start',
  template: `
     <h1>Marker et stop</h1>
  `,
  styles: [`
  h1 {
    font-family: "Avenir Next";
    font-weight: 400;
  }
  `
  ]
})
export class OrderStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
