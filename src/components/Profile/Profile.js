import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import apiUrl from './../../apiConfig'
import { createProfile, updateProfile, deleteProfile, getProfile } from './../../api/profile'
import './../../index.scss'
import { Button, Form, Col, Row } from 'react-bootstrap'
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
      .then(() => getProfile(user))
      .then(user => user.data.profile)
      .then(user => {
        this.setState({
          about: user.about,
          avatarUrl: user.avatarUrl,
          quote: user.quote,
          rank: user.rank,
          website: user.website
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Delete Profile Failed with error: ' + error.message,
          message: messages.deleteProfileFailure,
          variant: 'danger'
        })
      })
  }

  onGetProfile = event => {
    const { msgAlert, user } = this.props
    getProfile(user)
      .then(user => user.data.profile)
      .then(user => {
        this.setState({
          about: user.about,
          avatarUrl: user.avatarUrl,
          quote: user.quote,
          rank: user.rank,
          website: user.website
        })
      })
      .then(() => msgAlert({
        heading: 'Get Profile Successful',
        message: messages.getProfileSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Get Profile Failed with error: ' + error.message,
          message: messages.getProfileFailure,
          variant: 'danger'
        })
      })
  }

  componentDidMount () {
    const { user } = this.props
    console.log(user.profile)
    if (user.profile) {
      this.onGetProfile()
    } else if (!user.profile) {
      this.onCreateProfile()
    }
  }

  render () {
    const { avatarUrl, about, rank, quote, website } = this.state

    return (
      <div>

        <Form className='updateForm' onSubmit={this.onUpdateProfile}>
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
        <div className="row profile-buttons">
          <Row>
            <Col>
              <Form onSubmit={this.onDeleteProfile}>
                <Button block
                  variant="danger"
                  type="submit"
                >
                  Delete
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default withRouter(Profile)
