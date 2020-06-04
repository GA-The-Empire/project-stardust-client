import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'
import apiUrl from './../../apiConfig'
import './../../index.scss'
import { Button } from 'react-bootstrap'

const Chat = ({ user }) => {
  const [yourID, setYourID] = useState()
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  const socketRef = useRef()

  useEffect(() => {
    socketRef.current = io.connect(apiUrl)
    socketRef.current.on('your id', res => {
      setYourID(res.id)
    })
    socketRef.current.on('connect', () => {
      socketRef.current.emit('send message', { id: '', body: `${user.userName} has entered the chat` })
    })
    socketRef.current.on('message', (message) => {
      receivedMessage(message)
    })
    return () => {
      socketRef.current.emit('send message', { id: '', body: `${user.userName} has left the chat` })
      socketRef.current.disconnect()
    }
  }, [])

  function receivedMessage (message) {
    setMessages(oldMsgs => [...oldMsgs, message])
  }

  function sendMessage (e) {
    e.preventDefault()
    const messageObject = {
      body: user.userName + ' - ' + message,
      id: yourID
    }
    setMessage('')
    socketRef.current.emit('send message', messageObject)
  }

  function handleChange (e) {
    setMessage(e.target.value)
  }

  return (
    <div className="page1">
      <div className="container1">
        {messages.map((message, index) => {
          if (message.id === yourID) {
            return (
              <div className="myRow1" key={index}>
                <div className="myMessage1">
                  {message.body}
                </div>
              </div>
            )
          }
          return (
            <div className="partnerRow1" key={index}>
              <div className="partnerMessage1">
                {message.body}
              </div>
            </div>
          )
        })}
      </div>
      <form className="form1" onSubmit={sendMessage}>
        <input className="textArea1" value={message} onChange={handleChange} placeholder="Say something..." />
        <Button className="button1" variant='secondary' type="submit">Send</Button>
      </form>
    </div>
  )
}

export default Chat
