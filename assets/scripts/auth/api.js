'use strict'

const app = require('../app-data.js')

const signUp = (success, failure, data) => {
  console.log("Sign up request queued")
  $.ajax({
    method : 'POST',
      url : app.app.api + '/sign-up',
    data
  }).done(success).fail(failure)
}

const signIn = (success, failure, data) => {
  console.log("Sign in request queued")
  $.ajax({
    method : 'POST',
    url : app.app.api + '/sign-in',
    data
  }).done(success).fail(failure)
}

const signOut = (success, failure) => {
  console.log("Sign out request queued")
  $.ajax({
    method: 'DELETE',
    url: app.app.api + '/sign-out/' + app.id,
    headers: {
      Authorization: 'Token token=' + app.token,
    }
  }).done(success)
  .fail(failure)
}

const changePW = (success, failure, data) => {
  console.log("Change password request queued")
  $.ajax({
    method: 'PATCH',
    url: app.app.api + '/change-password/' + app.id,
    data,
    headers: {
      Authorization: 'Token token=' + app.token,
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
