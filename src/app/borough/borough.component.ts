import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { RtdbService } from "../rtdb/rtdb.service";
import { Borough } from "./borough";
import { Store } from '@ngrx/store';
import { RECEIVE_BOROUGHS , IRootState} from '../reducers';
import { environment } from '../../environments/environment';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';
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
export class BoroughComponent  {
    // boroughs: Borough[] = [];
    boroughs: Observable<Borough[]>;
    public config: any;
    // TypeScript public modifiers
    constructor( private store: Store<IRootState>, private rtdb: RtdbService) {
        this.config = environment.config;
        this.boroughs = store.select(s => s.boroughs);
    }


}
