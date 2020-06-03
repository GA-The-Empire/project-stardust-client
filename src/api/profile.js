import apiUrl from '../apiConfig'
import axios from 'axios'

export const create = credentials => {
  return axios({
    method: 'POST',
    url: apiUrl + '/profile',
    data: {
      user: {
        _id: credentials._id,
        profile: {
          about: credentials.profile.about,
          avatarUrl: credentials.profile.avatarUrl,
          quote: credentials.profile.quote,
          rank: credentials.profile.rank,
          website: credentials.profile.website
        }
      }
    }
  })
}

export const update = credentials => {
  return axios({
    url: apiUrl + '/profile/' + credentials._id,
    method: 'POST',
    data: {
      user: {
        _id: credentials._id,
        profile: {
          about: credentials.profile.about,
          avatarUrl: credentials.profile.avatarUrl,
          quote: credentials.profile.quote,
          rank: credentials.profile.rank,
          website: credentials.profile.website
        }
      }
    }
  })
}

export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  })
}

export const changeUserName = (credentials, user) => {
  return axios({
    url: apiUrl + '/change-username',
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      credentials: {
        userName: credentials.userName
      }
    }
  })
}
