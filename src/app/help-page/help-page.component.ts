import {Component, OnInit, Input} from '@angular/core';
import {HelpItem} from "./help-item/help-item";

@Component({
  selector: 'fd-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.css']
})
export class HelpPageComponent implements OnInit {

  @Input() showFew = false;
  @Input() helpItems = [
    new HelpItem("Hvor hurtigt levere i?", "Den gennemsnitlige leveringstid er 35 minutter, men tiderne kan variere afhængigt af efterspørgslen, trafik"),
    new HelpItem("Hvad koster det?", "Vi har ingen faste priser, vores satser varierer efter nogle faktorer og er styret af en algoritme, der beregner afstand, tid, og kompleksitet der involveret i leveringen."),
    new HelpItem("Kan man forudbestille?", "Favor Drop leverer on-demand og på det tidspunkt du har brug for det. Selvom vores gennemsnitlige leverings tid er under en time, anbefaler vi at du forudbestiller omkring 30 minutter – 1 time før tid."),
    new HelpItem("Større bestillinger/Catering?","Hvis du ønsker større bestillinger fra en restaurant eller butik, anbefaler vi at du kontakter den restaurant/ butik direkte og bestiller din ordre. Så klare vores runner resten for dig."),
    new HelpItem("Hvem er det?", "Det bare mig"),
  ];
  listNotExpanded = false;

  constructor() { }

  ngOnInit() {
    //Test whether list is not expanded
    this.listNotExpanded = (this.showFew == true && this.helpItems.length > 4);
  }

  expandList() {
    this.showFew = false;
    this.listNotExpanded = false;
  }
}
