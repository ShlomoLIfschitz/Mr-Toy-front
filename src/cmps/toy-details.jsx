import { Link } from 'react-router-dom'
import { NavLink, useHistory } from 'react-router-dom'
import {userService} from '../services/user.service.js'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { Component } from 'react'
import { toyService } from '../services/toy.service.js'
import { loadToys, removeToy } from '../store/actions/toy.action.js'
import {ChatApp} from './chat-app'



class _ToyDetails extends Component {
    state = {
        toy: null,
        review: null,
        loggedInUser:userService.getLoggedinUser()
    }

    componentDidMount() {
        const { toyId } = this.props.match.params
        toyService.getById(toyId).then((toy) => {
            if (!toy) this.onGoBack()
            this.setState({ toy })
        })
    }

    onRemoveToy = (toyId) => {
        this.props.removeToy(toyId)
            .then(() => {
                this.onGoBack()
            })
    }



    onGoBack = () => {
        this.props.history.push('/toy')
    }
    render() {
        const { toy,loggedInUser } = this.state
        if (!toy) return <div>Loading todo...</div>
        return (
            <section className='toy-details'>
                <div>
                    <h2>{toy.name}</h2>
                    <h4>{toy.price}</h4>
                    {toy.inStock && <h4>In stock</h4>}
                    {!toy.inStock && <h4>Not in stock</h4>}
                    <button onClick={() => this.onRemoveToy(toy._id)}>
                        Delete
                    </button>
                    <Link to={`/toy/edit/${toy._id}`}>
                        <button>Edit</button>
                    </Link>
                    <button onClick={this.onGoBack}>back</button>
                    <Link to={`/review/${toy._id}`}>
                        <button>Review</button>
                    </Link>
                </div>
                <ChatApp toy={toy} loggedInUser={loggedInUser}/>
            </section>
        )
    }
}

const mapDispatchToProps = {
    removeToy,
    loadToys,
}

const mapStateToProps = (storeState) => {
    return {
        toys: storeState.toys
    }
}
export const ToyDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(_ToyDetails)
