import { FilterAction, StayFilterModel } from "..";
import { types } from "./FilterTypes";

export const filterReducer = (state: StayFilterModel, action: FilterAction): StayFilterModel => {
    switch ( action.type ) {

        case types.updateLocation:
            return {
                ...state,
                location: action.payload.toString()
            };

        case types.updateAdultGuests:
            return {
                ...state,
                adultGuests: getFinalValue(state.adultGuests, Number(action.payload))
            };
        case types.updateChildrenGuests:
            return {
                ...state,
                childrenGuests: getFinalValue(state.childrenGuests, Number(action.payload))
            };
    
        default:
            return state;
    }
}

const getFinalValue = (field: number, payload: number ) => {
    if (field+payload < 0) {
        return 0
    } else {
        return field+payload
    }
}