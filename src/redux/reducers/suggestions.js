


const defaultState = [{
    id:2,
    title: 'Test'
}];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
       case 'findSuggestions': {
           return [{
               id:1,
               title: 'findSuggestions'
           },];
       }
        default:
            return state;
    }
}

export default reducer;