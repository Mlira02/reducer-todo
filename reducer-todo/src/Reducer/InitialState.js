export const initialState = {
    item: "Learn about reducers",
    completed: false,
    id: 1
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO': return {
            ...state,
            item: action.payload,
            id: Date.now(),
            completed: !state.completed
        }
        case 'TOGGLE_TODO' :
            return {
                ...state,
                completed: !state.completed
            }
        case 'CLEAR_COMPLETED':
            return {
                ...state
            }
        default:
            return state;
    }
}

