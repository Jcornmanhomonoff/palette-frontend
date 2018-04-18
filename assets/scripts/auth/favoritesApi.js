'use strict'

const config = require('../config')
const store = require('../store')

// const popularShots = () => {
//   $.ajax({
//     method: 'GET',
//     url: 'https://dribbble.com/popular_shots'
//   })
// }

const addFavorite = (success, failure, id, tag) => {
  // debugger
  console.log('here')
  $.ajax({
    method: 'POST',
    url: config.apiUrl + 'favorites',
    headers: {
      Authorization: 'Token token=' + store.token
    },
    data: {
      'favorite': {
        'dribble': id,
        'tag': tag
      }
    }
  })
    .done(success)
    .fail(failure)
}

const getFavorite = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: config.apiUrl + 'favorites',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
    .done(success)
    .fail(failure)
}

const deleteFavorite = (success, failure, id) => {
  $.ajax({
    method: 'DELETE',
    url: config.apiUrl + 'favorites/' + id,
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
    .done(success)
    .fail(failure)
}

const editFavorite = (success, failure, id, tag) => {
  $.ajax({
    method: 'PATCH',
    url: config.apiUrl + 'favorites/' + id,
    headers: {
      Authorization: 'Token token=' + store.token
    },
    data: {
      'favorite': {
        'tag': tag
      }
    }
  })
    .done(success)
    .fail(failure)
}

module.exports = {
  addFavorite,
  getFavorite,
  deleteFavorite,
  editFavorite
  // popularShots
}
