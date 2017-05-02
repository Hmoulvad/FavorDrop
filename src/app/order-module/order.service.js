"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var stop_1 = require("../_models/stop");
var OrderService = (function () {
    function OrderService(serverService) {
        this.serverService = serverService;
        this.stops = [
            new stop_1.Stop('10 Hamburgers', 'Rantzausgade 28B, 5TH 2200', 'Uden bolle, Wrapped i Bacon'),
            new stop_1.Stop('Malk De Koijn Plakat', 'Rantzausgade 28B, 5TH 2200', 'To Back To From time'),
        ];
        this.counter = this.stops.length;
    }
    OrderService.prototype.getStops = function () {
        return this.stops;
    };
    OrderService.prototype.addStop = function (name, address, comment) {
        this.stops.push(new stop_1.Stop(name, address, comment));
        this.counter++;
    };
    OrderService.prototype.getStopIndex = function (id) {
        return this.stops[id];
    };
    OrderService.prototype.deleteStop = function (stop) {
        this.stops.splice(this.stops.indexOf(stop), 1);
    };
    OrderService.prototype.getOrdersFromDB = function () {
        this.serverService.OrdersFromDB(this.stops)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
    };
    OrderService = __decorate([
        core_1.Injectable()
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
