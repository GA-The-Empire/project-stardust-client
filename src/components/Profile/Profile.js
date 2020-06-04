import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import apiUrl from './../../apiConfig'
import { createProfile, updateProfile, deleteProfile } from './../../api/profile'
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

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onCreateProfile = event => {
    event.preventDefault()

    const { msgAlert, user } = this.props

    createProfile(this.state, user)
      .then(() => msgAlert({
        heading: 'Create Success',
        message: messages.createProfileSuccess,
        variant: 'success'
      }))
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
          message: messages.createProfileFailure,
          variant: 'danger'
        })
      })
  }

  onUpdateProfile = event => {
    event.preventDefault()

    const { msgAlert, user } = this.props

    updateProfile(this.state, user)
      .then(() => msgAlert({
        heading: 'Update Profile Successful',
        message: messages.updateProfileSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Update Profile Failed with error: ' + error.message,
          message: messages.updateProfileFailure,
          variant: 'danger'
        })
      })
  }

  onDeleteProfile = event => {
    event.preventDefault()

    const { msgAlert, user } = this.props

    deleteProfile(user)
      .then(() => msgAlert({
        heading: 'Profile Deleted Successful',
        message: messages.deleteProfileSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Delete Profile Failed with error: ' + error.message,
          message: messages.deleteProfileFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { avatarUrl, about, rank, quote, website } = this.state

    return (
      <div>

        <Form onSubmit={this.onUpdateProfile}>
          <Form.Group controlId="about">
            <Form.Label>About</Form.Label>
            <Form.Control
              type="text"
              name="about"
              value={about}
              placeholder={this.about}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="avatarUrl">
            <Form.Label>AvatarUrl</Form.Label>
            <Form.Control
              type="text"
              name="avatarUrl"
              value={avatarUrl}
              placeholder={this.avatarUrl}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="rank">
            <Form.Label>Rank</Form.Label>
            <Form.Control
              name="rank"
              value={rank}
              type="text"
              placeholder={this.rank}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="quote">
            <Form.Label>Quote</Form.Label>
            <Form.Control
              name="quote"
              value={quote}
              type="text"
              placeholder={this.quote}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="website">
            <Form.Label>Website</Form.Label>
            <Form.Control
              name="website"
              value={website}
              type="text"
              placeholder={this.website}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
          >
            Update
          </Button>
        </Form>
        <div className="row">
          <Form onSubmit={this.onCreateProfile}>
            <Button
              variant="secondary"
              type="submit"
            >
              Create
            </Button>
          </Form>
          <Form onSubmit={this.onDeleteProfile}>
            <Button
              variant="danger"
              type="submit"
            >
              Delete
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}
// <Nav.Link href="#profile/update">{<Button variant="info">Update Profile</Button>}</Nav.Link>

export default withRouter(Profile)
