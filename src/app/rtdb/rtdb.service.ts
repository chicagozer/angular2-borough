import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import * as io from 'socket.io-client';
import {Borough} from '../borough/borough';
import { Tile } from '../grid/tile';

@Injectable()
export class RtdbService {

    private socket1: any;
    private socket2: any;

    private url1: string = 'http://ibatch-01sc8:9001';
    private url2: string = 'https://rtdb.rheosoft.com';

    private otiles : Observable<Tile[]>;
    private  boroughs: Observable<Borough[]>;



    constructor(private http: Http) {


        console.log('creating socket2');
        this.socket2 = io(this.url2);



        this.socket2.on('connect', () => {
            console.log('connected to socket2 now subscribing');

            this.socket2.emit('subscribe', [{
                view: '90e40254-d57c-4ce5-88b5-20034c9511ec'
                //      ,ticket: response.json()
            }]);

        });

        console.log('fetching boroughs');
       this.boroughs = new Observable<Borough[]>((observer: any) => {

            this.socket2.on('90e40254-d57c-4ce5-88b5-20034c9511ec',
                data => {
                    console.log('new borough data');
                    observer.next(data.map(i => new Borough(i[0], i[1].fvTotal, i[1].count)));
                });

            return () => {
                this.socket2.disconnect();
            };
        });


        console.log('creating socket1');
        this.socket1 = io(this.url1);


        this.socket1.on('connect', () => {
            console.log('connected to socket1 now subscribing');

            this.socket1.emit('subscribe', [
                {
                    view: '5183acd6-09e2-451e-840f-a073e6363d38'
                    //      ,ticket: response.json()
                }]);

        });

        console.log('fetching tiles');

        let colors: string[] = ['lightblue','lightgreen','lightpink','#DDBDF1','#E9967A','#FFC300','#00AEFF'];


       this.otiles =  new Observable<Tile[]>((observer: any) => {

            this.socket1.on('5183acd6-09e2-451e-840f-a073e6363d38',
                data => {
                    console.log('new tile data');
                    observer.next(data.map(i => new Tile(i[0], i[1].modelYear + ' ' + i[1].make, colors[i[0] % 7], new Date(i[1].apptDate))));
                });

            return () => {
                this.socket1.disconnect();
            };
        });




    }


    public getBoroughs(): Observable<Borough[]> {

    return this.boroughs;
    }

    public getTiles(): Observable<Tile[]> {

    return this.otiles;

    }
}
