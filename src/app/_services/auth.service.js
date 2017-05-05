"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require('rxjs/add/operator/do');
require('rxjs/add/operator/map');
require('rxjs/add/operator/take');
var firebase = require('firebase');
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.getAuth = function () {
        return firebase.auth();
    };
    AuthService.prototype.emailAuthentication = function (email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (success) {
            firebase.auth().currentUser.getToken(true).then(function (idToken) {
                sessionStorage.setItem('currentUser', idToken);
                this.router.navigate(['/']);
            }.bind(this));
        }.bind(this), function (error) {
            console.log(error.message);
            localStorage.removeItem('currentUser');
        });
    };
    AuthService.prototype.emailSignup = function (email, password) {
        var _this = this;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function (error) { return console.log(error); }).then(function (response) {
            _this.emailAuthentication(email, password);
        });
    };
    AuthService.prototype.facebookAuthentication = function () {
        var provider = new firebase.auth.FacebookAuthProvider;
        provider.addScope("email");
        firebase.auth().signInWithPopup(provider).then(function (result) {
            firebase.auth().currentUser.getToken(true).then(function (idToken) {
                sessionStorage.setItem('currentUser', idToken);
                this.router.navigate(['/']);
            }.bind(this));
        }.bind(this));
    };
    AuthService.prototype.googleAuthentication = function () {
        var provider = new firebase.auth.GoogleAuthProvider;
        firebase.auth().signInWithPopup(provider).then(function (result) {
            firebase.auth().currentUser.getToken(true).then(function (idToken) {
                sessionStorage.setItem('currentUser', idToken);
                this.router.navigate(['/']);
            }.bind(this));
        }.bind(this));
    };
    AuthService.prototype.isAuthenticated = function () {
        if (sessionStorage.getItem('currentUser') != null) {
            return true;
        }
        return false;
    };
    AuthService.prototype.logout = function () {
        sessionStorage.removeItem('currentUser');
        firebase.auth().signOut();
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
