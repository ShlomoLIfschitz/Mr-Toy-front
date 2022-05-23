import { connect } from 'react-redux'
import { Component } from 'react'
import { toyService } from '../services/toy.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { saveToy } from '../store/actions/toy.action.js'


class _ToyEdit extends Component {
    state = {
        toy: toyService.getEmptyToy(),
    }

    componentDidMount() {
        const { toyId } = this.props.match.params
        if (!toyId) return
        toyService.getById(toyId).then((toy) => {
            if (!toy) this.onGoBack()
            this.setState({ toy })
        })
    }

    onGoBack = () => {
        this.props.history.push('/toy')
    }

    onHandleChange = ({ target }) => {
        const field = target.name
        this.setState((prevState) => ({
            toy: { ...prevState.toy, [field]: target.value },
        }))
    }

    onHandleSubmit = (ev) => {
        ev.preventDefault()
    }

    onSaveToy = async (ev) => {
        ev.preventDefault()
        const toyToSave = { ...this.state.toy }
        await this.props.saveToy(toyToSave)
        this.props.history.push('/toy')
    }

    render() {

        const { toy } = this.state
        if (!toy) return <div>Loading...</div>

        return (
            <section className='toy-edit'>
                <form onSubmit={this.onSaveToy}>

                    <label htmlFor='toy-title'>
                        <h3>Name:</h3>
                    </label>
                    <input
                        type='text'
                        name='name'
                        value={toy.name}
                        id='toy-title'
                        placeholder='Name'
                        onChange={this.onHandleChange}
                        required
                    />

                    <label htmlFor='toy-label'>
                        <h3>Labels:</h3>
                    </label>
                    <input
                        type='text'
                        name='labels'
                        value={toy.labels}
                        id='toy-label'
                        placeholder='label'
                        onChange={this.onHandleChange}
                        required
                    />

                    <label htmlFor='toy-price'>
                        <h3>Price:</h3>
                    </label>
                    <input
                        autoComplete='false'
                        name='price'
                        type='number'
                        id='toy-price'
                        onChange={this.onHandleChange}
                        placeholder={toy.price}
                        onClick={(ev) => (ev.target.value = '')}
                    />

                    <div>
                        <button className='btn-save'>Save Changes</button>
                        <button onClick={this.onGoBack}>Back</button>
                    </div>
                </form>
            </section>
        )
    }
}

const mapDispatchToProps = {
    saveToy,
}

const mapStateToProps = (storeState) => {
    return {
        toys: storeState.toys
    }
}

export const ToyEdit = connect(mapStateToProps, mapDispatchToProps)(_ToyEdit)
