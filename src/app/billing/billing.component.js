"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BillingComponent = (function () {
    function BillingComponent(orderService, userService, router) {
        this.orderService = orderService;
        this.userService = userService;
        this.router = router;
        this.stops = [];
        this.username = 'Hannibal B. Moulvad';
        this.email = 'Hmoulvad@hotmail.com';
        this.address = 'Rantzausgade 28B';
        this.zipcode = '2200';
        this.city = 'København N';
    }
    BillingComponent.prototype.ngOnInit = function () {
        this.stops = this.orderService.getStops();
    };
    BillingComponent.prototype.onSubmit = function () {
        console.log("JEG HAR TRYKKET PÅ KNAPPEN");
        this.router.navigate(['profile-page']);
        this.orderService.sendOrderToDB();
    };
    BillingComponent = __decorate([
        core_1.Component({
            selector: 'fd-billing',
            templateUrl: './billing.component.html',
            styles: [require('../../styles.css').toString()]
        })
    ], BillingComponent);
    return BillingComponent;
}());
exports.BillingComponent = BillingComponent;
