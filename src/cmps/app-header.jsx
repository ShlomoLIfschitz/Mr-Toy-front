import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/actions/user.action.js'
import { UserMsg } from './user-msg.jsx'

export const AppHeader = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.userModule)
    const history = useHistory()
    const onLogout = () => {
        dispatch(logout())
        onGoBack()
    }

    const onGoBack = () => {
        history.push('/toy')
    }

    return (
        <header >
            <h1>Mister Toy 🎯</h1>
            <UserMsg />
            <nav>
                <NavLink to="/">Home |</NavLink>
                {user && <NavLink to="/toy">Toys |</NavLink>}
                <NavLink to="/about">About |</NavLink>
                {user && <NavLink onClick={onLogout} to="/">Logout</NavLink>}
            </nav>
        </header>
    )
}
