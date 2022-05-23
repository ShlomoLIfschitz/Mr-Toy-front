export function statusReducer(state = {status: 'Sababa'}, action = {}) {
    switch (action.type) {
        case 'SET_STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}