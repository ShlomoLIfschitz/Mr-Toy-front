const initialState = {
    toys: [],
    filterBy: { status: [], txt: '' },
    navOpen: ''
}

export function toyReducer(state = initialState, action) {
    var toys
    // var toy
    switch (action.type) {
        case 'SET_TOYS':
            if (state.filterBy.status.includes('all')) {
                toys = action.toys.filter(toy => toy.name.includes(state.filterBy.txt))
                return { ...state, toys: toys }
            }
            if (state.filterBy.status.length) {
                toys = []
                action.toys.forEach(toy => {
                    if (toy.labels.find(label => {
                        if (state.filterBy.status.includes(label)) return true
                    })) {
                        toys.push(toy)
                        // toys = toys.filter(toy => toy.name.includes(state.filterBy.txt))
                    }
                })
                toys = toys.filter(toy => toy.name.includes(state.filterBy.txt))
                return { ...state, toys: toys }
            }
            if (state.filterBy.txt.length) {
                toys = action.toys.filter(toy => toy.name.includes(state.filterBy.txt))
                return { ...state, toys: toys }
            }
            toys = action.toys.filter(toy => toy.name.includes(state.filterBy.txt))
            return { ...state, toys: toys }
        case 'REMOVE_TOY':
            toys = state.toys.filter(toy => toy._id !== action.toyId)
            return { ...state, toys }
        case 'ADD_TOY':
            toys = [action.toy, ...state.toys]
            return { ...state, toys }
        case 'UPDATE_TOY':
            toys = state.toys.map(currToy =>
                (currToy._id === action.toy._id) ? action.toy : currToy)
            return { ...state, toys }
        case 'TOY_FILTER':
            return { ...state, filterBy: action.filter }
        default:
            return state
    }
}
