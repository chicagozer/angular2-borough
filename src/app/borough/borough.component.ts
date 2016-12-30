import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { ConfigService } from "../config/config.service";
import { RtdbService } from "../rtdb/rtdb.service";
import { Borough } from "./borough";

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string "home"
    providers: [],
    selector: "sg-app-borough",  // <home></home>
    // We need to tell Angular"s Dependency Injection which providers are in our app.
    // Our list of styles in our component. We may add more to compose many styles together
    styleUrls: ["./borough.style.css"],
    // Every Angular template is first compiled by the browser before Angular runs it"s compiler
    templateUrl: "./borough.template.html",
})
export class BoroughComponent implements OnInit {
    // boroughs: Borough[] = [];
    public config: any;
    private boroughs: Observable<Borough[]>;
    // TypeScript public modifiers
    constructor(private rtdbService: RtdbService, private configsvc: ConfigService) {
        this.config = configsvc.config;
    }

    public getBoroughs(): void {
        // this.rtdbService
        //   .getBoroughs()
        //   .subscribe(boroughs => this.boroughs = boroughs);
        this.boroughs = this.rtdbService.getBoroughs();
    }

    public ngOnInit() {

        this.getBoroughs();
       // console.log("hello `Borough` component");

    }
}
