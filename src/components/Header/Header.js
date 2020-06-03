import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import AutoSignIn from '../AutoSignIn/AutoSignIn'
import { Button } from 'react-bootstrap'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#chat">{<Button variant="warning">Chat</Button>}</Nav.Link>
    <Nav.Link href="#change-password">{<Button variant="success">Change Password</Button>}</Nav.Link>
    <Nav.Link href="#change-username">{<Button variant="success">Change User Name</Button>}</Nav.Link>
    <Nav.Link href="#profile">{<Button variant="info">Profile</Button>}</Nav.Link>
    <Nav.Link href="#sign-out">{<Button variant="danger">Sign Out</Button>}</Nav.Link>
  </Fragment>
)

const profileOptions = (
  <Fragment>
    <Nav.Link href="#profile/update">{<Button variant="info">Update Profile</Button>}</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">{<Button variant="success">Sign Up</Button>}</Nav.Link>
    <Nav.Link href="#sign-in">{<Button variant="success">Sign In</Button>}</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">{<Button variant="secondary">Home</Button>}</Nav.Link>
  </Fragment>
)

const Header = ({ user, msgAlert, setUser }) => (
  <Navbar bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="#">
      <img
        alt=""
        src="./empirelogo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Project Stardust Client
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.userName}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
        { !user && <AutoSignIn msgAlerts={msgAlert} setUser={setUser} />}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
