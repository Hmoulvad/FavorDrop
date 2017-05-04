"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var OrderListComponent = (function () {
    function OrderListComponent(orderService) {
        this.orderService = orderService;
        this.price = this.orderService.getPrice();
    }
    OrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.orderService.ordersChanged
            .subscribe(function (stops) {
            _this.stops = stops;
        });
        this.stops = this.orderService.getStops();
        this.subscriptionprice = this.orderService.priceChanged
            .subscribe(function (price) {
            _this.price = price;
        });
    };
    OrderListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.subscriptionprice.unsubscribe();
    };
    OrderListComponent = __decorate([
        core_1.Component({
            selector: 'fd-order-list',
            templateUrl: './order-list.component.html',
            styles: [require('../../../styles.css').toString()]
        })
    ], OrderListComponent);
    return OrderListComponent;
}());
exports.OrderListComponent = OrderListComponent;
