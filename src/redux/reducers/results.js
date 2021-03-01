import { type as findResultsType } from '../actions/findResults';
import items from '../../data/items';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    
                console.log("PAYLOAD:  ",payload);
    switch (type) {  
        case findResultsType: {
            if (!payload) {
                return [];
            }
            console.log("FIND:  ");
            const regex = new RegExp(`^${payload}` , 'i');

            return items.filter(n => regex.test(n.title));
        }     
        default:
            return state;
    }
}

export default reducer;