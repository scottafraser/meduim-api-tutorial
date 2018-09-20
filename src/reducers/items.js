import { itemIsLoading } from "../actions/items";

export function itemHasErrored(state = false, action) {
    switch(action.type) {
        case 'ITEM_HAS_ERRORED':

        default:
            return state;
    }
}

export function itemIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEM_IS_LOADING':
            return action.isLoading;

            default:
                return state;
    }
}

export function items(state = [], action ) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
        return action.items;

        default:
            return state;
    }
}

//To re-iterate, every reducer will return a discrete property of the state, 
// regardless of how many conditions are inside that reducer.
