var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { RtdbService } from "../rtdb/rtdb.service";
import { environment } from '../../environments/environment';
export var BoroughComponent = (function () {
    // TypeScript public modifiers
    function BoroughComponent(rtdbService) {
        this.rtdbService = rtdbService;
        this.config = environment.config;
    }
    BoroughComponent.prototype.getBoroughs = function () {
        // this.rtdbService
        //   .getBoroughs()
        //   .subscribe(boroughs => this.boroughs = boroughs);
        this.boroughs = this.rtdbService.getBoroughs();
    };
    BoroughComponent.prototype.ngOnInit = function () {
        this.getBoroughs();
        // console.log("hello `Borough` component");
    };
    BoroughComponent = __decorate([
        Component({
            // The selector is what angular internally uses
            // for `document.querySelectorAll(selector)` in our index.html
            // where, in this case, selector is the string "home"
            providers: [],
            selector: "app-borough",
            // We need to tell Angular"s Dependency Injection which providers are in our app.
            // Our list of styles in our component. We may add more to compose many styles together
            styleUrls: ["./borough.style.css"],
            // Every Angular template is first compiled by the browser before Angular runs it"s compiler
            templateUrl: "./borough.template.html",
        }), 
        __metadata('design:paramtypes', [RtdbService])
    ], BoroughComponent);
    return BoroughComponent;
}());
//# sourceMappingURL=/Users/jim/git/angular2-borough/src/app/borough/borough.component.js.map