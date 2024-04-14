// Get elements by their ID
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Add event listener to the button
searchButton.addEventListener('click', function () {
    // Get the search input value
    const searchValue = searchInput.value;

    // Save the search value to localStorage
    localStorage.setItem('search', searchValue);
});

// Add event listener to the input (if you want to trigger the search on Enter keypress)
searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        // Simulate a button click to trigger the search
        searchButton.click();
    }
});