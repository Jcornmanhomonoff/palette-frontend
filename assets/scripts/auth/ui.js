'use strict'

const app = require('../app-data.js')
// const authApi = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields')
const favoritesApi = require('./favoritesApi')

require('jribbble')

console.log(app)

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  app.token = data.user.token
  app.id = data.user.id
  console.log(app)
  $('#signInModal').modal('hide')
  $(".modal-backdrop").hide()
  favoritesApi.getFavorite(success, failure)
}

const changePasswordSuccess = (data) => {
  console.log(app)
  $('#changePasswordModal').modal('hide')
  $(".modal-backdrop").hide()
  console.log(data)
}

const signUpSuccess = (data) => {
  console.log(success)
  $('#signUpModal').modal('hide')
  $(".modal-backdrop").hide()
  console.log(data)
}

const signOutSuccess = () => {
  app.user = null
  console.log(app)
  $('.content').html('')
}

const addFavoriteSuccess = (data) => {
  console.log(data)
  $('#tagModal').modal('hide')
  $(".modal-backdrop").hide()
  favoritesApi.getFavorite(dribbbleFavorites, failure)
}


// GET FAVORITES
// create empty array to push objects into
// for each id, loop through the array of favorites, get each object for that id
const dribbbleFavorites = (data) => {
  console.log(data)
  let favoriteShots = []
  // debugger
  for (let i = 0; i < data.favorites.length; i++) {
    $.jribbble.shots(data.favorites[i].dribble).then(function(res) {
      favoriteShots.push({
        dribbleObject: res,
        railsID: data.favorites[i].id,
        favoriteTag: data.favorites[i].tag,
      })
      console.log(favoriteShots)
    })
  }
  //tells template to wait for 1/4 second until data is pushed into array
  setTimeout(function() {
    console.log(favoriteShots)
    let getfavoritesTemplate = require('./templates/favorites.handlebars')
    $('#carousel-example-generic').html(getfavoritesTemplate({
      data: favoriteShots
    }))
  }, 500)
}


const deleteFavoriteSuccess = () => {
  $('#carousel-example-generic').html('') //reloads html
  favoritesApi.getFavorite(dribbbleFavorites, failure)
}


const editTagSuccess = () => {
  $('#editTagModal').modal('hide')
  $(".modal-backdrop").hide()
  $('#carousel-example-generic').html('') //reloads html
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
  editTagSuccess,
  app,
}
