'use strict'

const store = require('../store.js')
// const authApi = require('./api.js')
// const getFormFields = require('../../../lib/get-form-fields')
const favoritesApi = require('./favoritesApi')
const jribbble = require('jribbble')

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  store.token = data.user.token
  store.id = data.user.id
  console.log(store)
  $('#signInModal').modal('hide')
  $('.modal-backdrop').hide()
  favoritesApi.getFavorite(success, failure)
}

const changePasswordSuccess = (data) => {
  console.log(store)
  $('#changePasswordModal').modal('hide')
  $('.modal-backdrop').hide()
  console.log(data)
}

const signUpSuccess = (data) => {
  console.log(success)
  $('#signUpModal').modal('hide')
  $('.modal-backdrop').hide()
  console.log(data)
}

const signOutSuccess = () => {
  store.user = null
  console.log(store)
  $('.content').html('')
}

const addFavoriteSuccess = (data) => {
  console.log(data)
  $('#tagModal').modal('hide')
  $('.modal-backdrop').hide()
  favoritesApi.getFavorite(dribbbleFavorites, failure)
}

// GET FAVORITES
// create empty array to push objects into
// for each id, loop through the array of favorites, get each object for that id
const dribbbleFavorites = (data) => {
  console.log(data)
  const favoriteShots = []
  // debugger
  // data.favorites.forEach(function (favorite) {
  //   console.log(favorite)
  //   jribbble.shots(favorite.dribbble, function (shot) {
  //     console.log('shot is ', shot)
  //     favoriteShots.push({ shot })
  //   })
  // })
  for (let i = 0; i < data.favorites.length; i++) {
    jribbble.shots(data.favorites[i].dribble, function (shot) {
      favoriteShots.push({
        shot
      })
      console.log(favoriteShots)
    })
  }
  // tells template to wait for 1/4 second until data is pushed into array
  setTimeout(function () {
    console.log(favoriteShots)
    const getfavoritesTemplate = require('../templates/favorites.hbs')
    $('#carousel-example-generic').html(getfavoritesTemplate({
      data: favoriteShots
    }))
  }, 500)
}

const deleteFavoriteSuccess = () => {
  $('#carousel-example-generic').html('') // reloads html
  favoritesApi.getFavorite(dribbbleFavorites, failure)
}

const editTagSuccess = () => {
  $('#editTagModal').modal('hide')
  $('.modal-backdrop').hide()
  $('#carousel-example-generic').html('') // reloads html
  favoritesApi.getFavorite(dribbbleFavorites, failure)
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
  changePasswordSuccess,
  addFavoriteSuccess,
  dribbbleFavorites,
  deleteFavoriteSuccess,
  editTagSuccess
}
