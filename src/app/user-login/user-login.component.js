"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var UserLoginComponent = (function () {
    function UserLoginComponent(authService) {
        this.authService = authService;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    UserLoginComponent.prototype.emailLogin = function (form) {
        this.authService.emailAuthentication(form.value.email, form.value.password);
        if (!this.authService.isAuthenticated()) {
            this.loginInvalid = true;
        }
    };
    UserLoginComponent.prototype.facebookLogin = function () {
        this.authService.facebookAuthentication();
    };
    UserLoginComponent.prototype.googleLogin = function () {
        this.authService.googleAuthentication();
    };
    UserLoginComponent = __decorate([
        core_1.Component({
            selector: 'fd-user-login',
            templateUrl: './user-login.component.html',
            styles: [require('../../styles.css').toString()]
        })
    ], UserLoginComponent);
    return UserLoginComponent;
}());
exports.UserLoginComponent = UserLoginComponent;
