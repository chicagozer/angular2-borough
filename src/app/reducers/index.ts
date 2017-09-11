import { ActionReducer, Action } from "@ngrx/store";
import {Borough} from "../borough/borough";

export interface IRootState {
    boroughs: Borough[];

}
export const RECEIVE_BOROUGHS = "RECEIVE_BOROUGHS";

export class ReceiveAction implements Action {
    readonly type = RECEIVE_BOROUGHS;
    constructor(public boroughs: Borough[]) {
    }
}

export function boroughReducer(state: IRootState = {boroughs: []}, action: ReceiveAction) {
    switch (action.type) {
        case RECEIVE_BOROUGHS:
            return action.boroughs;
        default:
            return state.boroughs;
    }
}




