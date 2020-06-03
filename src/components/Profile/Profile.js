import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import apiUrl from './../../apiConfig'
import { create } from './../../api/profile'
import './../../index.scss'
import { Button, Form } from 'react-bootstrap'
import messages from '../AutoDismissAlert/messages'

class Profile extends Component {
  constructor () {
    super()

    this.state = {
      about: '',
      avatarUrl: '',
      quote: '',
      rank: '',
      website: ''
    }
  }

  handleChange = event => this.setStatw({
    [event.target.name]: event.target.value
  })

  onCreate = event => {
    event.preventDefault()

    const { msgAlert, history, setUser } = this.props

    create(this.state)
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Create Success',
        message: messages.createSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({
          about: '',
          avatarUrl: '',
          quote: '',
          rank: '',
          website: ''
        })
        msgAlert({
          heading: 'Create Failed with error: ' + error.message,
          message: messages.createFailure,
          variant: 'danger'
        })
      })
  }

  render () {

    return (

    )
  }
}

export default withRouter(Profile)
