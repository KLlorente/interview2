/* This app doesn't follow a11y best practices, and the JS file is incomplete. 
Complete the getDataFromApi, displaySearchData, and watchSubmit functions. 
When you're done, this app should allow a user to search for an artist and 
song title (both should be required), and display the song lyrics. 
You should make requests to this API: https://lyricsovh.docs.apiary.io/# . 
Also make any necessary adjustments to make this app accessible. */

function getDataFromApi(artist, title, callback) {
  const LYRICS_URL = `https://api.lyrics.ovh/v1/${artist}/${title}`
  const query = {
  	queryArtist: `${artist}`,
  	queryTitle: `${title}`
  }; 
  $.getJSON(LYRICS_URL, query, callback); 
}

function displaySearchData(data) {
  const results = JSON.stringify(data.lyrics).replace(/\\n/g, "<br>").replace(/\\r/g, "");
  $('main').show();
  $('.js-search-results').html(results); 
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
  	event.preventDefault(); 
  	const queryTargetArtist = $(event.currentTarget).find('.js-query-artist'); 
  	const queryArtist=queryTargetArtist.val(); 
  	const queryTargetTitle = $(event.currentTarget).find('.js-query-title'); 
  	const queryTitle=queryTargetTitle.val(); 
  	queryTargetArtist.val(""); 
  	queryTargetTitle.val(""); 
  	getDataFromApi(queryArtist, queryTitle, displaySearchData); 
  })
}

$(watchSubmit);