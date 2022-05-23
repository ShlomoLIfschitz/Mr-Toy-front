import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Component } from 'react'
import { toyService } from '../services/toy.service.js'
import { ToyList } from '../cmps/toy-list.jsx'
import { ToyFilter } from '../cmps/toy-filter.jsx'
import { loadToys, removeToy, saveToy, setFilter } from '../store/actions/toy.action.js'
import { setUserMsg } from '../store/actions/user.action.js'


class _ToyApp extends Component {

    componentDidMount() {
        this.props.loadToys()
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.filterBy) !== JSON.stringify(this.props.filterBy)) {
            this.props.loadToys()
        }
    }

    onRemoveToy = async (toyId) => {
        await this.props.removeToy(toyId)
        this.props.loadToys()
    }

    handleChange = (ev) => {
        const value = ev.target.innerHTML
        const key = 'status'
        this.props.setFilter(key, value)
        this.props.loadToys()
    }

    handleChangeTxt = ({ target }) => {
        const value = target.value
        const key = target.name
        this.props.setFilter(key, value)
        this.props.loadToys()
    }

    onOpenNav = () => {
        let { navOpen } = this.props
        if (navOpen) this.setState({ navOpen: '' })
        if (!navOpen) this.setState({ navOpen: 'nav-open' })
    }
    onGetMsg=()=>{
        console.log('Hello Noya & Erez');
    }



    render() {
        const { toys, filterBy, navOpen } = this.props
        return (
            <section className='toy-app'>
                <ToyFilter
                    filterBy={filterBy}
                    handleChange={this.handleChange}
                    handleChangeTxt={this.handleChangeTxt}
                    onOpenNav={this.onOpenNav}
                    navOpen={navOpen}
                />
                <Link to='/toy/edit'>
                    <button className='btn-add'>Add Toy</button>
                </Link>
                <ToyList
                    toys={toys}
                    onRemoveToy={this.onRemoveToy}
                />
                <button onClick={()=>this.onGetMsg}>Hello</button>
            </section>
        )
    }
}

const mapStateToProps = (storeState) => {
    return {
        toys: storeState.toyModule.toys,
        filterBy: storeState.toyModule.filterBy,
    }
}

const mapDispatchToProps = {
    loadToys,
    removeToy,
    saveToy,
    setFilter,
    setUserMsg
}
export const ToyApp = connect(mapStateToProps, mapDispatchToProps)(_ToyApp)
