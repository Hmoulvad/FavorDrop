"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var user_1 = require("../_models/user");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.user = new user_1.User();
    }
    UserService.prototype.updateUser = function (UID, name, email, phone, address, zip, city) {
        this.user.UID = UID;
        this.user.name = name;
        this.user.email = email;
        this.user.phone = phone;
        this.user.address = address;
        this.user.zip = zip;
        this.user.city = city;
    };
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService.prototype.CreateUserInDB = function (user) {
        return this.http.put('http://52.213.91.0:8080/FavorDrop_war/clients/' + this.user.UID, JSON.stringify(user), this.jwt());
    };
    UserService.prototype.getClient = function () {
        var _this = this;
        return this.http.get('http://52.213.91.0:8080/FavorDrop_war/clients/' + this.user.UID, this.jwt())
            .map(function (res) { return _this.extractClient(res); });
    };
    UserService.prototype.jwt = function () {
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('currentUser') });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    UserService.prototype.extractClient = function (res) {
        var body = res.json();
        this.user = body;
        return body.data || {};
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
