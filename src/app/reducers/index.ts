import { ActionReducer, Action } from '@ngrx/store';
import {Borough} from "../borough/borough";

export interface IRootState {
    boroughs: Borough[];

}
export const RECEIVE_BOROUGHS = 'RECEIVE_BOROUGHS';

export function reducer(state: IRootState = {boroughs: []}, action: Action) {
    switch (action.type) {
        case RECEIVE_BOROUGHS:
            return Object.assign({}, state, {
                boroughs: action.payload.boroughs,
            });
        default:
            return state;
    }
}

export const boroughReducer: ActionReducer<IRootState> = reducer;



