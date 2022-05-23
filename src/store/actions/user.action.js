import { userService } from '../../services/user.service.js'
import { showErrorMsg } from '../../services/event-bus.service.js'

export function loadUsers() {
    return async dispatch => {
        try {
            dispatch({ type: 'LOADING_START' })
            const users = await userService.getUsers()
            dispatch({ type: 'SET_USERS', users })
        } catch (err) {
            console.log('UserActions: err in loadUsers', err)
        } finally {
            dispatch({ type: 'LOADING_DONE' })
        }
    }
}

export function logout() { // Action Creator
    return async dispatch => {
        try {
            const user = await userService.logout()
            dispatch({
                type: 'SET_USER',
                user: null
            })
        } catch (err) {
            throw err
        }
    }
}

export function login(credentials) { // Action Creator
    console.log('user: ');
    return async dispatch => {
        try {
            const user = await userService.login(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
            console.log('user: ', user);
        } catch (err) {
            throw err
        }
    }
}

export function signup(credentials) { // Action Creator
    console.log('hellooooooooooooooooooooooooooooooooooo');
    return async dispatch => {
        try {
            const user = await userService.signup(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
        } catch (err) {
            throw err
        }
    }
}

export function setUserMsg(msg) {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'SET_MSG',
                msg
            })
        } catch (err) {
            throw err
        }
    }
}

