// Get the id from the URL
var urlParams = new URLSearchParams(window.location.search);
var id = parseInt(urlParams.get('id'), 10);

// Get the title and time upload elements from the DOM
var titleElement = document.querySelector('#title');
var timeUploadElement = document.querySelector('#time-upload');

// Get the news from localStorage
var news = JSON.parse(localStorage.getItem('news'));

// Update the title and time upload elements with the data from the news array
var newsItem = news[id];
titleElement.textContent = newsItem[0];
timeUploadElement.textContent = newsItem[1];