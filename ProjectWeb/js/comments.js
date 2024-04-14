
var comments = JSON.parse(localStorage.getItem('comments')) || [];

function displayComments() {
    var commentsDiv = document.querySelector('.all-comments');
    commentsDiv.innerHTML = '';

    for (var i = 0; i < comments.length; i++) {
        var commentDiv = document.createElement('div');
        commentDiv.className = 'comment';

        var nameH4 = document.createElement('h4');
        nameH4.textContent = comments[i].name;
        var commentP = document.createElement('p');
        commentP.textContent = comments[i].comment;
        var timeP = document.createElement('p');
        timeP.textContent = new Date(comments[i].time).toLocaleString();

        commentDiv.appendChild(nameH4);
        commentDiv.appendChild(commentP);
        commentDiv.appendChild(timeP);

        commentsDiv.appendChild(commentDiv);
    }
}

function sortComments() {
    var sortCommentsSelect = document.querySelector('#sort-comments');

    if (sortCommentsSelect.value === 'latest') {
        comments.sort(function(a, b) {
            return b.time - a.time;
        });
    } else if (sortCommentsSelect.value === 'oldest') {
        comments.sort(function(a, b) {
            return a.time - b.time;
        });
    }
}

var form = document.querySelector('.comment-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.querySelector('#name').value;
    var comment = document.querySelector('#comment').value;

    comments.push({ name: name, comment: comment, time: Date.now() });

    localStorage.setItem('comments', JSON.stringify(comments));

    sortComments();
    displayComments();

    form.reset();
});

var sortCommentsSelect = document.querySelector('#sort-comments');
sortCommentsSelect.addEventListener('change', function() {
    if (this.value === 'latest') {
        comments.sort(function(a, b) {
            return b.time - a.time; 
        });
    } else if (this.value === 'oldest') {
        comments.sort(function(a, b) {
            return a.time - b.time;
        });
    }

    displayComments();
});