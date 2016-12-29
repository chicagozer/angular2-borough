import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import * as io from 'socket.io-client';
import {Borough} from '../borough/borough';

@Injectable()
export class RtdbService {

    private socket: SocketIOClient.Socket;

    private url: string = 'https://rtdb.rheosoft.com';

    private boroughs: Observable<Borough[]>;


    constructor(private http: Http) {

        this.socket = io(this.url);


        this.socket.on('connect', () => {

            this.socket.emit('subscribe', [{
                view: '90e40254-d57c-4ce5-88b5-20034c9511ec'
                //      ,ticket: response.json()
            }]);

        });

        this.boroughs = new Observable<Borough[]>((observer: any) => {

            this.socket.on('90e40254-d57c-4ce5-88b5-20034c9511ec',
                data => {
                    console.log('new borough data');
                    observer.next(data.map(i => new Borough(i[0], i[1].fvTotal, i[1].count)));
                });

            return () => {
                this.socket.disconnect();
            };
        });

    }


    public getBoroughs(): Observable<Borough[]> {

        return this.boroughs;
    }

}