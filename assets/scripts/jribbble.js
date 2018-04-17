'use strict'

// const authApi = require('./auth/api')
const authFavorites = require('./auth/favoritesApi')
const authUi = require('./auth/ui')
const jribbble = require('jribbble')

jribbble.setToken('14bf2a248a42fcf7989fe3cbb10fc5377291102486a976e6efd54a22462ba549')
jribbble.popular(function (shots) {
  console.log(shots)
})
jribbble.shots(function (shotsArray) {
  console.log(shotsArray)
  const html = []

  // for each shot on the page, give it a link and an image
  shotsArray.forEach(function (shot) {
    // console.log('shot is ', shot)
    html.push('<div class="shots--shot hovereffect" data-id="' + shot.id + '">')
    html.push('<a href="' + shot.html_url + '" target="_blank">')
    html.push('<img src="' + shot.images.normal + '">')
    html.push('<div class="overlay">')
    html.push('<div class="projectTitle">')
    html.push('<h2>' + shot.title + '</h2>')
    html.push('</div>')
    html.push('<p>')
    // html.push(`<a target="_blank" href="${shot.html_url}">` + shot.user + '</a>')
    // html.push('<p>')
    html.push('<a href="#" class="addFavorite">Add to favorites</a>')
    html.push('<p>')
    html.push(`<a target="_blank" href="${shot.html_url}">` + 'View on Dribbble</a>')
    html.push('<a href="#' + shot.user + '"</h2>')
    // html.push('<i class="fa fa-twitter fa-facebook fa-instagram fa-dribbble">')
    html.push('</p></p></p></p></div></a></div>')
  })

  // join elements into a string
  $('.shots').html(html.join(''))
})

let addFavoriteID
let editFavoriteID
// get id of image & call ajax funtion to send to db
$('.shots').on('click', function () {
  addFavoriteID = $(event.target).parent().parent().parent().data('id')
})
$('#add-tag').on('submit', function (event) {
  event.preventDefault()
  const tag = $('#tagName').val()
  console.log(tag)
  authFavorites.addFavorite(authUi.addFavoriteSuccess, authUi.failure, addFavoriteID, tag)
})
$('#changeTagButton').on('click', function (event) {
  const tag = $('#editTagName').val()
  console.log(tag)
  authFavorites.editFavorite(authUi.editTagSuccess, authUi.failure, editFavoriteID, tag)
})

$('#edit-tag').on('submit', function (event) {
  event.preventDefault()
})
$('#carousel-example-generic').on('click', '.deleteFavorite', function () {
  const favoriteID = $(this).data('id')
  authFavorites.deleteFavorite(authUi.deleteFavoriteSuccess, authUi.failure, favoriteID)
})

// THIS IS GETTING ALL FAVORITE SHOTS FOR USER
$('#getFavorite').on('click', function () {
  authFavorites.getFavorite(authUi.dribbbleFavorites, authUi.failure)
  $('.favorites-header').show()
})

// OPENS ADD TAG MODAL FROM BUTTON
$('.shots').on('click', '.addFavorite', function (event) {
  event.preventDefault()
  $('#tagModal').modal('show')
})

// OPENS EDIT TAG MODAL FROM BUTTON
$('#carousel-example-generic').on('click', '.editTag', function (event) {
  event.preventDefault()
  editFavoriteID = $(this).data('id')
  $('#editTagModal').modal('show')
})

$('.item.favoriteCarousel').first().addClass('active')
//
// //filter by tag
// $.jribbble.shots({per_page: 1000}).then(function(shots) {
//   var html = []
//   console.log(shots)
//
//   shots.forEach(function(shot) {
//     if (shot.tags.indexOf('typography') >= 0) {
//       html.push('<div class="shots--shot">')
//       html.push('<a href="' + shot.html_url + '" target="_blank">')
//       html.push('<img src="' + shot.images.normal + '">')
//       html.push('</a></div>')
//     }
//   })
//
//   $('.shots').html(html.join(''))
// })
