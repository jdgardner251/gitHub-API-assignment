'use strict';
function displayResults(responseJson) {
  // if there are previous results, remove them
  console.log(responseJson);
  console.log(responseJson.length);
  $('#results-list').empty();
  //iterate through the articles array, stopping at length of object
  for (let i = 0; i < responseJson.length; i++){
   
    $('#results-list').append(
      `<li><h3><a href="${responseJson[i].html_url}">${responseJson[i].name}</a></h3>
      </li>`
    )};
  //display the results section  
  $('#results').removeClass('hidden');
};

function getRepos(url) {

  fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const userName = $('#js-user-name').val();
    console.log(userName)

    const url = `https://api.github.com/users/${userName}/repos`
    console.log(url);

    getRepos(url);

  });
}

$(watchForm);









