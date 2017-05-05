"use strict";
var Order = (function () {
    function Order(user, time, stops) {
        this.user = user;
        this.time = time;
        this.stops = stops;
    }
    Order.prototype.getStops = function () {
        return this.stops;
    };
    return Order;
}());
exports.Order = Order;
