import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { RtdbService } from "../rtdb/rtdb.service";
import { Borough } from "./borough";
import { AppConfig } from '../app.config';
import { environment } from '../../environments/environment';
@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string "home"
    providers: [],
    selector: "app-borough",  // <home></home>
    // We need to tell Angular"s Dependency Injection which providers are in our app.
    // Our list of styles in our component. We may add more to compose many styles together
    styleUrls: ["./borough.style.css"],
    // Every Angular template is first compiled by the browser before Angular runs it"s compiler
    templateUrl: "./borough.template.html",
})
export class BoroughComponent implements OnInit {
    // boroughs: Borough[] = [];
    private boroughs: Observable<Borough[]>;
    public config : Object;
    // TypeScript public modifiers
    constructor(public appConfig: AppConfig, private rtdbService: RtdbService) {
        this.config = environment.config;

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
