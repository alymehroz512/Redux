const reducer = (initialState = 0 , action) => {
    if (action.type === 'deposit') {
        return initialState + action.payload;
    }
    else if (action.type === 'withdraw') {
        if (initialState >= action.payload) {
            return initialState - action.payload;
        }
    }
    else {
        return initialState;
    }
}

export default reducer