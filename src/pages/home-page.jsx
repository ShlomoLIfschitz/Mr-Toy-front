import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, signup } from '../store/actions/user.action'
import { LoginSignup } from '../cmps/login-signup.jsx'

export const HomePage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { user } = useSelector((state) => state.userModule)

    const onLogin = (credentials) => {
        dispatch(login(credentials))
        onGoBack()
    }

    const onSignup = (credentials) => {
        dispatch(signup(credentials))
    }

    const onGoBack = () => {
        history.push('/toy')
    }

    return (
        <section className='home'>
            {!user && <section className="user-info">
                <LoginSignup onLogin={onLogin} onSignup={onSignup} />
            </section>}
        </section >
    )
}

// const mapDispatchToProps = {
//     login,
//     signup
// }

// const mapStateToProps = (storeState) => {
//     return {
//         user: storeState.userModule.user,
//     }
// }
// export const HomePage = connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(_HomePage)
