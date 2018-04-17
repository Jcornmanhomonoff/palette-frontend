'use strict'

const config = require('../config')
const store = require('../store')

const signUp = (success, failure, data) => {
  console.log('Sign up request queued')
  $.ajax({
    method: 'POST',
    url: config.apiUrl + 'sign-up',
    data
  }).done(success).fail(failure)
}

const signIn = (success, failure, data) => {
  console.log('Sign in request queued')
  $.ajax({
    method: 'POST',
    url: config.apiUrl + 'sign-in',
    data
  }).done(success).fail(failure)
}

const signOut = (success, failure) => {
  console.log('Sign out request queued')
  $.ajax({
    method: 'DELETE',
    url: config.apiUrl + 'sign-out/' + store.id,
    headers: {
      Authorization: 'Token token=' + store.token
    }
  }).done(success)
    .fail(failure)
}

const changePW = (success, failure, data) => {
  console.log('Change password request queued')
  $.ajax({
    method: 'PATCH',
    url: config.apiUrl + 'change-password/' + store.id,
    data,
    headers: {
      Authorization: 'Token token=' + store.token
    }
  }).done(success)
    .fail(failure)
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePW
}
