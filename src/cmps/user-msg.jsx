// import { eventBusService } from '../services/event-bus.service.js'
// import { setUserMsg } from '../store/user.action.js';
import { connect } from 'react-redux'
import { Component } from 'react'


class _UserMsg extends Component {

  timeoutId;
  componentDidUpdate() {
    if (this.timeoutId) clearTimeout(this.timeoutId)
    this.timeoutId = setTimeout(() => {
      this.onCloseMsg()
    }, 3000)
  }

  onCloseMsg = () => {
    this.props.setUserMsg(null)
  }

  render() {
    const { msg } = this.props
    if (!msg) return <span></span>
    const msgClass = msg.type || ''
    return (
      <section className={'user-msg ' + msgClass}>
        <button onClick={this.onCloseMsg}>x</button>
        {msg.txt}
      </section>
    )
  }
}

const mapStateToProps = ({ userModule }) => {
  return {
    msg: userModule.msg
  }
}

const mapDispatchToProps = {
  // setUserMsg
}

export const UserMsg = connect(mapStateToProps, mapDispatchToProps)(_UserMsg)