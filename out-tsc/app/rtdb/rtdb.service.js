var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import * as io from "socket.io-client";
import { Borough } from "../borough/borough";
export var RtdbService = (function () {
    function RtdbService(http) {
        var _this = this;
        this.http = http;
        this.url = "https://rtdb.rheosoft.com";
        this.socket = io(this.url);
        this.socket.on("connect", function () {
            _this.socket.emit("subscribe", [{
                    view: "90e40254-d57c-4ce5-88b5-20034c9511ec",
                }]);
        });
        this.boroughs = new Observable(function (observer) {
            _this.socket.on("90e40254-d57c-4ce5-88b5-20034c9511ec", function (data) {
                observer.next(data.map(function (i) { return new Borough(i[0], i[1].fvTotal, i[1].count); }));
            });
            return function () {
                _this.socket.disconnect();
            };
        });
    }
    RtdbService.prototype.getBoroughs = function () {
        return this.boroughs;
    };
    RtdbService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], RtdbService);
    return RtdbService;
}());
//# sourceMappingURL=/Users/jim/git/angular2-borough/src/app/rtdb/rtdb.service.js.map