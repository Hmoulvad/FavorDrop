"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var OrderAddComponent = (function () {
    function OrderAddComponent(orderService) {
        this.orderService = orderService;
    }
    OrderAddComponent.prototype.onAddStop = function (form) {
        var value = form.value;
        this.orderService.addStop(value.order, value.address, value.comment);
        form.reset();
    };
    OrderAddComponent.prototype.ngOnInit = function () {
    };
    OrderAddComponent = __decorate([
        core_1.Component({
            selector: 'fd-order-add',
            templateUrl: './order-add-component.html',
            styles: [require('../../../styles.css').toString()]
        })
    ], OrderAddComponent);
    return OrderAddComponent;
}());
exports.OrderAddComponent = OrderAddComponent;
