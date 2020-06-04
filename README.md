# Project Stardust: The Client (Chat Application with Sockets)

Given a list of different project options to tackle our group, The Empire, decided to give sockets.io and building a chat application a go.

We named our project after an infamous project of the same name a long time ago in a galaxy far, far away. This gave us an overarching theme to work with and we wanted to create a communication platform for the small moon.

## Important Links

- [Project Stardust API Repo](https://github.com/GA-The-Empire/project-stardust-api)
- [Deployed API](https://fast-headland-53736.herokuapp.com/)
- [Deployed Client](https://ga-the-empire.github.io/project-stardust-client/#/)

## Planning Story

The first thing we did was sit down and figure out what we wanted to do.

We then got together and did the ERD and wireframes together. This allowed us to sketch an idea of how we wanted to tackle the project and what views we were going to have to create.

We then put together a tentative schedule

1. Monday: Back End Complete + Auth + as much front end as we can
1. Tuesday: Front-End
1. Wednesday: Finish Front End, verify chat works, start implenting models (chat room and/or user profiles)
1.Thursday: Make things pretty, clean things up (SCSS, CSS)

Every morning we had a stand-up meeting to go over our plan for the day and any thoughts we had overnight. We all worked together (4 people in one zoom room, one person coding) for the majority of the project and so we stayed on the same page. This also kept our branch management under control.

Overall we stayed very close to this schedule. We ended up taking a little longer on the front end and implementing the profile section that spilled into Thursday, but otherwise it was on point.

### User Stories

1. As an unregistered user i want to be able to sign up for an account.
1. As a user I want to be able to log into my account and talk to my friends!
1. As a user I want to be able log into my account
1. As a user I want to be able to sign out
1. As a user I want to be able to change my password
1. As a user i want to be able to receive the messages that other people in the chatroom are sending
1. As a user i want to be able to send messages to the chat room.
1. As a user i want to choose a username when i signup.
Stretch Goals-----
1. As a user, i'd like to see time sent for messages
1. As a user I would like to be able to set an avatar!

### Technologies Used

1. html
1. CSS / sass
1. JavaScript
1. React
1. Bootstrap
1. Axios
1. AJAX
1. Requiring other files
1. Wireframes
1. User Stories
1. Markup documentation
1. Use of NPM
1. GitHub Integration w/ branch control
1. Integration with a custom API we created with Express0

### Unsolved Problems

- We wanted to make a way to see other people's profiles by clicking their name in the chat. Currently you can only create, read, update and delete your own profile.
- We wanted to implement direct messaging with additional chat rooms
- We wanted to implement friends lists
- We wanted to implement a cover to the exhaust vent

## Images

---
### ERD (entity relationship diagram)

![](public/wireframeErd/erd.png)

#### Wireframe:
![](public/wireframeErd/landing.png)
![](public/wireframeErd/signup.png)
![](public/wireframeErd/changePw.png)
![](public/wireframeErd/changeUsername.png)
![](public/wireframeErd/chat.png)
