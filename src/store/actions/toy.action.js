import { toyService } from '../../services/toy.service.js'

export function loadToys() { // Action Creator
    return async (dispatch) => {
        try {
            const toys = await toyService.query()
            dispatch({
                type: 'SET_TOYS',
                toys
            })
        } catch (err) {
            throw err
        }
    }
}

export function removeToy(toyId) { // Action Creator
    return async (dispatch) => {
        try {
            const toy_id = await toyService.remove(toyId)
            dispatch({
                type: 'REMOVE_TOY',
                toy_id
            })
        } catch (err) {
            throw err
        }
    }
}

export function saveToy(toy) { // Action Creator
    return async (dispatch) => {
        try {
            const actionType = (toy._id) ? 'UPDATE_TOY' : 'ADD_TOY'
            const res = await toyService.save(toy)
            const savedToy = res
            dispatch({
                type: actionType,
                toy: savedToy
            })
        } catch (err) {
            throw err
        }
    }
}

export function setFilter(key, value) {
    return (dispatch, getState) => {
        const prevFilter = getState().toyModule.filterBy
        let filter = { ...prevFilter, [key]: value }
        if (key === 'status') {
            if (prevFilter.status.includes(value)) {
                const idx = prevFilter.status.findIndex(filter => filter === value)
                prevFilter.status.splice(idx, 1)
                filter.status = prevFilter.status
            } else filter.status = [...prevFilter.status, value]
        }
        console.log(filter)
        const action = {
            type: 'TOY_FILTER',
            filter
        }
        dispatch(action)
    }
}