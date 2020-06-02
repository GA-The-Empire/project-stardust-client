import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Button from 'react-bootstrap/Button'

class AutoSignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: 'darth@vader',
      password: 'deathstar'
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { msgAlerts, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => msgAlerts({
        heading: 'Auto Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ email: 't@t', password: 't' })
        msgAlerts({
          heading: 'Auto Sign In Failed with error: ' + error.message,
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <Button
        variant="primary"
        type="click"
        onClick={this.onSignIn}
      >
        Auto-SignIn
      </Button>
    )
  }
}

export default withRouter(AutoSignIn)
