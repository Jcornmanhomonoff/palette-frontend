'use strict'

const app = require('../app-data.js')

const addFavorite = (success, failure, id, tag) => {
  // debugger
  $.ajax({
    method: 'POST',
    url: app.app.api + 'favorites',
    headers: {
      Authorization: 'Token token=' + app.token,
    },
    data: {
      "favorite": {
        "dribble": id,
        "tag": tag
      }
    },
  })
    .done(success)
    .fail(failure)
}


const getFavorite = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: app.app.api + 'favorites',
    headers: {
      Authorization: 'Token token=' + app.token,
    },
  })
    .done(success)
    .fail(failure)
}


const deleteFavorite = (success, failure, id) => {
  $.ajax({
    method: 'DELETE',
    url: app.app.api + 'favorites/' + id,
    headers: {
      Authorization: 'Token token=' + app.token,
    },
  })
    .done(success)
    .fail(failure)
}

const editFavorite = (success, failure, id, tag) => {
  $.ajax({
    method: 'PATCH',
    url: app.app.api + 'favorites/' + id,
    headers: {
      Authorization: 'Token token=' + app.token,
    },
    data: {
      "favorite": {
        "tag": tag
      }
    },
  })
    .done(success)
    .fail(failure)
}

module.exports = {
  addFavorite,
  getFavorite,
  deleteFavorite,
  editFavorite
}
