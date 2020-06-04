import apiUrl from '../apiConfig'
import axios from 'axios'

export const createProfile = (credentials, user) => {
  return axios({
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    url: apiUrl + '/profile',
    data: {
      user: {
        _id: credentials._id,
        profile: {
          about: credentials.about,
          avatarUrl: credentials.avatarUrl,
          quote: credentials.quote,
          rank: credentials.rank,
          website: credentials.website
        }
      }
    }
  })
}

export const updateProfile = (credentials, user) => {
  return axios({
    url: apiUrl + '/profile/' + user._id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      user: {
        _id: credentials._id,
        profile: {
          about: credentials.about,
          avatarUrl: credentials.avatarUrl,
          quote: credentials.quote,
          rank: credentials.rank,
          website: credentials.website
        }
      }
    }
  })
}

export const deleteProfile = user => {
  return axios({
    url: apiUrl + '/profile/' + user._id,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const getProfile = user => {
  return axios({
    url: apiUrl + '/profile/' + user._id,
    method: 'GET'
  })
}
