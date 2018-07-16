'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')

$(() => {
  require('./example')
  authEvents.addHandlers()
  // OPENS SIGNIN FROM DROPDOWN
  $('.open-sign-in').on('click', function (event) {
    event.preventDefault()
    $('#signInModal').modal('show')
  })

  // OPENS SIGNUP FROM DROPDOWN
  $('.open-sign-up').on('click', function (event) {
    event.preventDefault()
    $('#signUpModal').modal('show')
  })

  // OPENS CHANGE PASSWORD FROM DROPDOWN
  $('.open-change-password').on('click', function (event) {
    event.preventDefault()
    $('#changePasswordModal').modal('show')
  })
})
