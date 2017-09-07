import { ActionReducer, Action } from '@ngrx/store';
import {Borough} from "../borough/borough";

export interface IRootState {
    boroughs: Borough[];

}
export const RECEIVE_BOROUGHS = 'RECEIVE_BOROUGHS';

export class ReceiveAction implements Action {
    readonly type = RECEIVE_BOROUGHS;
    constructor(public payload: Borough[]) {
    }
}

export class UnsafeAction implements Action {
    readonly type = RECEIVE_BOROUGHS;
    payload?: any;
}

export function reducer(state: IRootState = {boroughs: []}, action: ReceiveAction): IRootState {
    //console.log("default reducer");
    switch (action.type) {
        case RECEIVE_BOROUGHS:
          //  console.log("receive reducer with " + action.payload.length + " boroughs");

            let myreply =  Object.assign({}, state, {
                boroughs: action.payload
            });
           // console.dir(myreply);
            return myreply;
        default:

            return state;
    }
}

export const boroughReducer: ActionReducer<IRootState> = reducer;



