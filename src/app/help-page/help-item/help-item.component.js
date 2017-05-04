"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HelpItemComponent = (function () {
    function HelpItemComponent() {
        this.shown = true;
        this.isExpanded = false;
    }
    HelpItemComponent.prototype.ngOnInit = function () {
    };
    HelpItemComponent.prototype.toggleItemContent = function () {
        this.isExpanded = !this.isExpanded;
        ////href="#collapseTwo"
    };
    __decorate([
        core_1.Input()
    ], HelpItemComponent.prototype, "shown", void 0);
    __decorate([
        core_1.Input()
    ], HelpItemComponent.prototype, "helpTitle", void 0);
    HelpItemComponent = __decorate([
        core_1.Component({
            selector: 'fd-help-item',
            templateUrl: './help-item.component.html',
            styleUrls: ['./help-item.component.css']
        })
    ], HelpItemComponent);
    return HelpItemComponent;
}());
exports.HelpItemComponent = HelpItemComponent;
