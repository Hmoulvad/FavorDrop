"use strict";
var Order = (function () {
    function Order(user, time, stops) {
        this._user = user;
        this.stops = stops;
        this.time = time;
    }
    Object.defineProperty(Order.prototype, "user", {
        set: function (value) {
            this._user = value;
        },
        enumerable: true,
        configurable: true
    });
    Order.prototype.getStops = function () {
        return this.stops;
    };
    return Order;
}());
exports.Order = Order;
