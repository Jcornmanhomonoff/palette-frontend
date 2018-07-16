'use strict'

require('../jribbble')

const getFormFields = require('../../../lib/get-form-fields')

const authApi = require('./api')
const authUi = require('./ui')
// const authFavorites = require('./auth/favoritesApi')
// const app = require('./app-data.js')

const onSignUp = (event) => {
  const data = getFormFields(this)
  console.log('sign-up success')
  event.preventDefault()
  authApi.signUp(authUi.success, authUi.failure, data)
}

const onSignIn = (event) => {
  const data = getFormFields(this)
  console.log('sign-in success')
  event.preventDefault()
  authApi.signIn(authUi.signInSuccess, authUi.failure, data)
}

const onSignOut = (event) => {
  console.log('sign-out success')
  event.preventDefault()
  authApi.signOut(authUi.signOutSuccess, authUi.failure)
}

const onChangePassword = (event) => {
  const data = getFormFields(this)
  event.preventDefault()
  authApi.changePassword(authUi.changePasswordSuccess, authUi.failure, data)
}

const addHandlers = () => {
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}
