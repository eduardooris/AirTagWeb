const initialState = {
    data: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA_ROOT':
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}