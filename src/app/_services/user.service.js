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
    UserService.prototype.updateUser = function (name, email, phone, address, zip, city) {
        if (name)
            this.user.name = name;
        if (email)
            this.user.email = email;
        if (phone)
            this.user.phone = phone;
        if (address)
            this.user.address = address;
        if (zip)
            this.user.zip = zip;
        if (city)
            this.user.city = city;
        console.log(JSON.stringify(this.user));
        this.CreateUserInDB();
    };
    UserService.prototype.CreateUserInDB = function () {
        return this.http.put('http://52.213.91.0:8080/FavorDrop_war_no_auth/clients/' + this.user.UID, JSON.stringify(this.user), this.jwt()).subscribe();
    };
    UserService.prototype.getClient = function () {
        var _this = this;
        return this.http.get('http://52.213.91.0:8080/FavorDrop_war_no_auth/clients/' + this.user.UID, this.jwt())
            .map(function (res) { return _this.user = res.json(); });
    };
    UserService.prototype.jwt = function () {
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('currentUser') });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
