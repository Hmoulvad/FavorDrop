"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var stop_1 = require("../_models/stop");
var Subject_1 = require("rxjs/Subject");
var order_1 = require("../_models/order");
var http_1 = require("@angular/http");
var OrderService = (function () {
    function OrderService(userService, http) {
        this.userService = userService;
        this.http = http;
        this.ordersChanged = new Subject_1.Subject();
        this.priceChanged = new Subject_1.Subject();
        this.orderHistory = [
            new order_1.Order(this.userService.user, "13:03", [new stop_1.Stop('10 Hamburgers', 'Rantzausgade 28B, 5TH 2200', 'Uden bolle, Wrapped i Bacon'), new stop_1.Stop('Malk De Koijn Plakat', 'Rantzausgade 28B, 5TH 2200', 'To Back To From time')]),
            new order_1.Order(this.userService.user, "13:03", [new stop_1.Stop('10 Hamburgers', 'Rantzausgade 28B, 5TH 2200', 'Uden bolle, Wrapped i Bacon'), new stop_1.Stop('Malk De Koijn Plakat', 'Rantzausgade 28B, 5TH 2200', 'To Back To From time')])
        ];
        this.currentOrder = new order_1.Order(this.userService.user, "13:03", [
            new stop_1.Stop('10 Hamburgers', 'Rantzausgade 28B, 5TH 2200', 'Uden bolle, Wrapped i Bacon'),
            new stop_1.Stop('Malk De Koijn Plakat', 'Rantzausgade 28B, 5TH 2200', 'To Back To From time')
        ]);
    }
    OrderService.prototype.updatePrice = function () {
        this.price = this.currentOrder.stops.length * 80;
        this.priceChanged.next(this.price);
    };
    OrderService.prototype.getPrice = function () {
        return this.getStops().length * 80;
    };
    OrderService.prototype.getStops = function () {
        return this.currentOrder.stops;
    };
    OrderService.prototype.addStop = function (order, address, comment) {
        this.currentOrder.stops.push(new stop_1.Stop(order, address, comment));
        this.ordersChanged.next(this.currentOrder.stops.slice());
        this.updatePrice();
    };
    OrderService.prototype.getStopIndex = function (index) {
        return this.currentOrder.stops[index];
    };
    OrderService.prototype.deleteStop = function (index) {
        this.currentOrder.stops.splice(index, 1);
        this.ordersChanged.next(this.currentOrder.stops.slice());
        this.updatePrice();
    };
    OrderService.prototype.sendOrderToDB = function () {
        this.currentOrder.user = this.userService.user;
        //this.serverService.CreateOrderInDB(this.currentOrder);
        console.log(this.currentOrder);
        this.currentOrder = null;
    };
    OrderService.prototype.getOrderHistory = function () {
        return this.orderHistory;
    };
    OrderService.prototype.CreateOrderInDB = function (order) {
        return this.http.post('http://52.213.91.0:8080/FavorDrop_war/clients/' + this.userService.user.UID + ' /orders/new/', JSON.stringify(order), this.jwt());
    };
    OrderService.prototype.GetOrdersFromDB = function () {
        var _this = this;
        return this.http.get('http://52.213.91.0:8080/FavorDrop_war/client/' + this.userService.user.UID + '/orders', this.jwt())
            .map(function (res) { return _this.extractOrders(res); });
    };
    OrderService.prototype.jwt = function () {
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('currentUser') });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    OrderService.prototype.extractOrders = function (res) {
        var body = res.json();
        this.orderHistory = body;
        return body.data || {};
    };
    OrderService = __decorate([
        core_1.Injectable()
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
