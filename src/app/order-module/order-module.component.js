"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var OrderModuleComponent = (function () {
    function OrderModuleComponent(orderService, Mot, Rout) {
        this.orderService = orderService;
        this.Mot = Mot;
        this.Rout = Rout;
        this.stops = [];
    }
    OrderModuleComponent.prototype.anyStop = function () {
        if (this.orderService.getStops().length > 0)
            return true;
    };
    OrderModuleComponent.prototype.ngOnInit = function () {
    };
    OrderModuleComponent.prototype.finishOrder = function () {
        if (this.Mot.isAuthenticated()) {
            this.Rout.navigate(['billing']);
        }
        else {
            this.Rout.navigate(['user-login']);
        }
    };
    OrderModuleComponent = __decorate([
        core_1.Component({
            selector: 'fd-order-module',
            templateUrl: './order-module.component.html',
            styles: [require('../../styles.css').toString()]
        })
    ], OrderModuleComponent);
    return OrderModuleComponent;
}());
exports.OrderModuleComponent = OrderModuleComponent;
