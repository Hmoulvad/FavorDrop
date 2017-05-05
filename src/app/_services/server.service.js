"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/Rx');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var ServerService = (function () {
    function ServerService(http, auth, backend) {
        this.http = http;
        this.auth = auth;
        this.backend = backend;
    }
    ServerService.prototype.CreateUserInDB = function (user) {
        console.log("Token: " + localStorage.getItem('currentUser'));
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('currentUser') });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(user);
        return this.http.put('http://52.213.91.0:8080/FavorDrop_war/clients/' + this.auth.getUserID(), body, options);
    };
    ServerService.prototype.GetOrdersFromDB = function () {
        var _this = this;
        return this.http.get('http://52.213.91.0:8080/FavorDrop_war/client/' + this.auth.getUserID() + '/orders')
            .map(function (res) { return _this.extractData(res); });
    };
    ServerService.prototype.extractData = function (res) {
        var body = res.json();
        this.backend.user = body;
        return body.data || {};
    };
    ServerService.prototype.CreateOrderInDB = function (order) {
        var body = JSON.stringify(order);
        return this.http.post('http://52.213.91.0:8080/FavorDrop_war/orders/' + this.auth.getUserID(), body);
    };
    ServerService.prototype.GetClientInfo = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('currentUser') });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log(this.auth.getUserID());
        return this.http.get('http://52.213.91.0:8080/FavorDrop_war/clients/' + this.auth.getUserID(), options)
            .map(function (res) { return _this.extractData(res); });
    };
    ServerService = __decorate([
        core_1.Injectable()
    ], ServerService);
    return ServerService;
}());
exports.ServerService = ServerService;
