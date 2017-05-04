"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var OrderDetailComponent = (function () {
    function OrderDetailComponent(orderService, route, rout) {
        this.orderService = orderService;
        this.route = route;
        this.rout = rout;
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
    };
    OrderDetailComponent.prototype.deleteStop = function () {
    };
    __decorate([
        core_1.Input()
    ], OrderDetailComponent.prototype, "stop", void 0);
    OrderDetailComponent = __decorate([
        core_1.Component({
            selector: 'fd-order-detail',
            templateUrl: './order-detail.component.html',
            styles: [require('../../../styles.css').toString()]
        })
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());
exports.OrderDetailComponent = OrderDetailComponent;
