import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import * as io from "socket.io-client";
import {Borough} from "../borough/borough";
import {Store} from "@ngrx/store";
import {RECEIVE_BOROUGHS, IRootState, ReceiveAction} from "../reducers";

@Injectable()
export class RtdbService {

    private socket: SocketIOClient.Socket;

    private readonly url =  "https://rtdb.mybluemix.net";

    constructor(private http: Http, private store: Store<IRootState>) {

        console.log("rtdbservice started!!");

        this.socket = io(this.url);

        this.socket.on("connect", () => {

            this.socket.emit("subscribe", [{
                view: "90e40254-d57c-4ce5-88b5-20034c9511ec",
                //      ,ticket: response.json()
            }]);

        });

        this.socket.on("90e40254-d57c-4ce5-88b5-20034c9511ec",
            (data) => {
               // console.log("dispatching...");
                this.store.dispatch(new ReceiveAction(data.map((i) => new Borough(i[0], i[1].fvTotal, i[1].count))));
                /*
           this.store.dispatch({
                        type: RECEIVE_BOROUGHS,
                        payload: {boroughs: data.map((i) => new Borough(i[0], i[1].fvTotal, i[1].count))}
                    }
                );*/
            });
    }
}
