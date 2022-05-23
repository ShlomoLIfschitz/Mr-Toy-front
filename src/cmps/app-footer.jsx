import { showSuccessMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'

// import { removeFromCart, checkout } from '../store/cart.action.js'

import { connect } from 'react-redux'
import { Component } from 'react'

class _AppFooter extends Component {

    state = {
        isCartShown: false,
    }

    componentDidMount() { }

    removeFromCart = (toyId) => {
        this.props.removeFromCart(toyId)
    }

    removeFromCart = (toyId) => {
        this.props.dispatch({
            type: 'REMOVE_FROM_CART',
            toyId
        })
    }

    checkout = () => {
        userService.updateBalance(-this.toytTotal)
            .then(newBalance => {
                showSuccessMsg('Charged you: $' + this.cartTotal.toLocaleString() + ` - Your balance: ${newBalance}`)
                this.props.dispatch({ type: 'CHECKOUT', balance: newBalance })
            })
    }

    get cartTotal() {
        return this.props.cart.reduce((acc, car) => acc + car.price, 0)
    }

    getCartTotal() {
        return this.props.cart.reduce((acc, car) => acc + car.price, 0)
    }

    render() {
        const { isCartShown } = this.state
        const { cart } = this.props

        return (
            <footer>
                <h1>YA WARADIIIIIKKKAAAAAAAA</h1>
                {/* <h5>
                    Currently { } cars in the shop
                </h5> */}
                {/* {cart.length > 0 &&
                    <h5>
                        <span>{cart.length}</span> Products in your Cart
                        <a href="#" onClick={(ev) => {
                            ev.preventDefault()
                            this.setState(prevState => ({ isCartShown: !prevState.isCartShown }))
                        }}>
                            ({(isCartShown) ? 'hide' : 'show'})
                        </a>
                    </h5>
                } */}
                {isCartShown && cart.length > 0 && <section className="cart" >
                    <h5>Your Cart</h5>
                    <ul>
                    </ul>
                    <p>Total: ${this.getCart} </p>
                    <p>Total: ${this.cartTotal.toLocaleString()} </p>

                    <button onClick={this.checkout}>Checkout</button>
                </section>}
            </footer>
        )
    }
}

const mapStateToProps = (storeState) => {
    return {
        count: storeState.count,
        // cart: storeState.cartModule.shoppingCart
    }
}

const mapDispatchToProps = {
    // removeFromCart,
    // checkout
}



export const AppFooter = connect(
    mapStateToProps,
    mapDispatchToProps
)(_AppFooter)