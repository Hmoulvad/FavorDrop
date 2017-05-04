"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var IntroPageComponent = (function () {
    function IntroPageComponent() {
    }
    IntroPageComponent.prototype.onSearch = function (form) {
        var value = form.value.zipcode;
        this.zipcode = value.toString();
        this.valuenumber = +this.zipcode;
        console.log(this.valuenumber);
        if (this.valuenumber > 1700 && this.valuenumber < 2920) {
            this.delivery = "Vi leverer til dit post nummer";
        }
        else {
            this.delivery = "Vi leverer ikke til dit post nummer";
        }
    };
    IntroPageComponent.prototype.ngOnInit = function () {
    };
    IntroPageComponent.prototype.ngAfterContentInit = function () {
    };
    IntroPageComponent = __decorate([
        core_1.Component({
            selector: 'fd-intro-page',
            templateUrl: './intro-page.component.html',
            styles: [require('../../styles.css').toString()]
        })
    ], IntroPageComponent);
    return IntroPageComponent;
}());
exports.IntroPageComponent = IntroPageComponent;
