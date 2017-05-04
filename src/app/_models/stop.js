"use strict";
var Stop = (function () {
    function Stop(order, address, comment) {
        this.order = order;
        this.address = address;
        this.comment = comment;
    }
    return Stop;
}());
exports.Stop = Stop;
