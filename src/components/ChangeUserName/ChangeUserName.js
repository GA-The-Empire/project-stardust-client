import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { changeUserName } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ChangeUserName extends Component {
  constructor () {
    super()

    this.state = {
      userName: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangeUserName = event => {
    event.preventDefault()

    const { msgAlert, history, user, setUser } = this.props

    changeUserName(this.state, user)
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Change Username Success',
        message: messages.changeUserNameSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ userName: '' })
        msgAlert({
          heading: 'Change Username Failed with error: ' + error.message,
          message: messages.changeUserNameFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { userName } = this.state

    return (
      <div className="row change-username-form">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Change User Name</h3>
          <Form onSubmit={this.onChangeUserName}>
            <Form.Group controlId="newPassword">
              <Form.Label>New user Name</Form.Label>
              <Form.Control
                required
                name="userName"
                value={userName}
                type="text"
                placeholder="New User Name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(ChangeUserName)
