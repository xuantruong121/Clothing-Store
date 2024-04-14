var cards = Array.from(document.querySelectorAll('.card-body'));
var news = cards.map(function (card) {
    var titleElement = card.querySelector('.card-body h6');
    var title = titleElement ? titleElement.textContent : '';
    var timeUploadElement = card.querySelector('.card-body #time-upload i');
    var timeUpload = timeUploadElement ? timeUploadElement.textContent : '';
    return [title, timeUpload];
});

localStorage.setItem('news', JSON.stringify(news));