"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var help_item_1 = require("./help-item/help-item");
var HelpPageComponent = (function () {
    function HelpPageComponent() {
        this.helpItems = [
            new help_item_1.HelpItem("Hvor hurtigt levere i?", "Den gennemsnitlige leveringstid er 35 minutter, men tiderne kan variere afhængigt af efterspørgslen, trafik"),
            new help_item_1.HelpItem("Hvad koster det?", "Vi har ingen faste priser, vores satser varierer efter nogle faktorer og er styret af en algoritme, der beregner afstand, tid, og kompleksitet der involveret i leveringen."),
            new help_item_1.HelpItem("Kan man forudbestille?", "Favor Drop leverer on-demand og på det tidspunkt du har brug for det. Selvom vores gennemsnitlige leverings tid er under en time, anbefaler vi at du forudbestiller omkring 30 minutter – 1 time før tid."),
            new help_item_1.HelpItem("Større bestillinger/Catering?", "Hvis du ønsker større bestillinger fra en restaurant eller butik, anbefaler vi at du kontakter den restaurant/ butik direkte og bestiller din ordre. Så klare vores runner resten for dig."),
            new help_item_1.HelpItem("Hvem er det?", "Det bare mig"),
            new help_item_1.HelpItem("Hvem levere for jer?", "Vores trofaste runner. Alle runner er screenet og har rent straffeattest, før de begynder at køre for os."),
            new help_item_1.HelpItem("Kan jeg blive en runner?", "Absolut! Vi er altid på udkig efter venlige folk der vil deltage i vores hurtigt voksende team. Send os en ansøgning Contact@favordrop.com"),
        ];
    }
    HelpPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], HelpPageComponent.prototype, "helpItems", void 0);
    HelpPageComponent = __decorate([
        core_1.Component({
            selector: 'fd-help-page',
            templateUrl: './help-page.component.html',
            styleUrls: ['./help-page.component.css']
        })
    ], HelpPageComponent);
    return HelpPageComponent;
}());
exports.HelpPageComponent = HelpPageComponent;
