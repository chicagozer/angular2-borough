import {Component} from '@angular/core';
import {Observable, Subscription} from 'rxjs/Rx';

import {RtdbService} from '../rtdb/rtdb.service';
import {Tile} from './tile';


@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'grid',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styleUrls: ['./grid.style.css'],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './grid.template.html'
})
export class GridComponent {
    otiles: Observable<Tile[]>;
    otilesSubscription: Subscription;
    tiles: Tile[] = [];

    // TypeScript public modifiers
    constructor(private rtdbService: RtdbService) {

    }


    ngOnInit() {
        this.otiles = this.rtdbService.getTiles();
        /*
         this.tiles = [
         {text: 'One',  color: 'lightblue'},
         {text: 'Two',  color: 'lightgreen'},
         {text: 'Three',  color: 'lightpink'},
         {text: 'Four',  color: '#DDBDF1'},
         {text: 'One',  color: 'lightblue'},
         {text: 'Two',  color: 'lightgreen'},
         {text: 'Three',  color: 'lightpink'},
         {text: 'Four',  color: '#DDBDF1'},
         {text: 'One',  color: 'lightblue'},
         {text: 'Two',  color: 'lightgreen'},
         {text: 'Three',  color: 'lightpink'},
         {text: 'Four',  color: '#DDBDF1'},
         {text: 'One',  color: 'lightblue'},
         {text: 'Two',  color: 'lightgreen'},
         {text: 'Three',  color: 'lightpink'},
         {text: 'Four',  color: '#DDBDF1'}
         ]; */

        console.log('hello `Grid` component');

        for (let i = 0; i < 480; i++) {
            let tile = new Tile(i, 'available', 'lightgray', '');
            this.tiles.push(tile);
        }

        this.otilesSubscription = this.otiles.subscribe(
            value => {
                value.forEach(it => {
                    let slot = (it.slot % 96) * 5 + Math.floor(it.slot / 96);

                    if (this.tiles[slot].text !== it.text) {
                        this.tiles[slot] = it;
                    }
                });
            });

    }

    ngOnDestroy() {
        this.otilesSubscription.unsubscribe();
    }


}
