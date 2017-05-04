"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CreateUserComponent = (function () {
    function CreateUserComponent(authService, rout) {
        this.authService = authService;
        this.rout = rout;
    }
    CreateUserComponent.prototype.ngOnInit = function () {
    };
    CreateUserComponent.prototype.onSignup = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.emailSignup(email, password);
        this.rout.navigate(['/user-login']);
    };
    CreateUserComponent = __decorate([
        core_1.Component({
            selector: 'fd-create-user',
            templateUrl: 'create-intro.component.html',
            styles: [require('../../../styles.css').toString()]
        })
    ], CreateUserComponent);
    return CreateUserComponent;
}());
exports.CreateUserComponent = CreateUserComponent;
