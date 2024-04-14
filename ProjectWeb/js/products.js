
document.addEventListener('DOMContentLoaded', function () {

    for (var i = 0; i < cards.length; i++) {
        if (i < 8) {
            cards[i].closest('.col').style.display = 'block';
        }
        else {
            cards[i].closest('.col').style.display = 'none';
        }
    }
});

// Get all product cards
var cards = document.querySelectorAll('.card');

// Get search query from localStorage
var searchQuery = localStorage.getItem('search');

// Remove search query from localStorage when the page is unloaded
window.addEventListener('unload', function () {
    let searchInput = document.getElementById('searchInput');

    if (searchQuery === null || searchInput.value !== '')
        return;
    localStorage.removeItem('search');
});

document.addEventListener('DOMContentLoaded', function () {
    // If there is no search query, show first 8 .col elements
    if (!searchQuery) {
        var cols = document.querySelectorAll('.col');
        for (var i = 0; i < cols.length; i++) {
            if (i < 8) {
                cols[i].style.display = 'block';
            } else {
                cols[i].style.display = 'none';
            }
        }
    } else {
        // Get all cards
        var cards = document.querySelectorAll('.card');

        // Loop through the product cards
        for (var i = 0; i < cards.length; i++) {
            // If the card text includes the search query, show the card
            if (cards[i].querySelector('.card-text').textContent.toLowerCase().includes(searchQuery.toLowerCase())) {
                cards[i].parentElement.style.display = 'block';
            } else {
                // If the card text does not include the search query, hide the parent .col
                cards[i].parentElement.style.display = 'none';
                console.log(cards[i].parentElement);
            }
        }
    }
});

// Sort the product cards with name and price
document.addEventListener('DOMContentLoaded', function () {
    // Get the select element and the .col elements that contain .card
    var select = document.querySelector('.sorting-2');
    var cols = Array.from(document.querySelectorAll('.col .card')).map(card => card.closest('.col'));

    select.addEventListener('change', function () {
        // Get the selected option
        var option = select.value;

        // Sort the .col elements based on the selected option
        switch (option) {
            case 'price-inc':
                cols.sort(function (a, b) {
                    return parseFloat(a.querySelector('.card .btn-primary').textContent) - parseFloat(b.querySelector('.card .btn-primary').textContent);
                });
                break;
            case 'price-dec':
                cols.sort(function (a, b) {
                    return parseFloat(b.querySelector('.card .btn-primary').textContent) - parseFloat(a.querySelector('.card .btn-primary').textContent);
                });
                break;
            case 'name-inc':
                cols.sort(function (a, b) {
                    return a.querySelector('.card .card-text').textContent.localeCompare(b.querySelector('.card .card-text').textContent);
                });
                break;
            case 'name-dec':
                cols.sort(function (a, b) {
                    return b.querySelector('.card .card-text').textContent.localeCompare(a.querySelector('.card .card-text').textContent);
                });
                break;
        }

        // Append the sorted .col elements to their parent container
        var container = document.querySelector('.row-cols-1');
        // Replace '.row-cols-1' with the actual selector of the parent container
        cols.forEach(function (col) {
            container.appendChild(col);
        });
    });
});

var colorCheckboxes = document.querySelectorAll('.colorForm .form-check-input');

var sizeCheckboxes = document.querySelectorAll('.sizeForm .form-check-input');

var radios = document.querySelectorAll('.priceForm .form-check-input');

// Lấy tất cả các 'col'
var cols = Array.from(document.querySelectorAll('.col'));

var checkboxChecked = false;

var radioChecked = false;

function handleInputChange() {
    handleCheckboxChange();
    handleRadioChange();
}

document.addEventListener('DOMContentLoaded', function () {
    handleRadioChange();
});

function handleRadioChange() {
    radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
            // Update radioChecked
            radioChecked = Array.from(radios).some(r => r.checked);

            // Get the selected price range
            var priceRange = document.querySelector('input[name="flexRadioDefault"]:checked').id;

            // Filter the .col elements based on the selected price range
            cols.forEach(function (col) {
                var price = parseFloat(col.querySelector('.card .card-footer .btn-primary').textContent) * 1000;

                switch (priceRange) {
                    case 'flexRadioDefault1':
                        col.style.display = price < 200000 ? 'block' : 'none';
                        break;
                    case 'flexRadioDefault2':
                        col.style.display = price >= 200000 && price < 300000 ? 'block' : 'none';
                        break;
                    case 'flexRadioDefault3':
                        col.style.display = price >= 300000 && price < 400000 ? 'block' : 'none';
                        break;
                    case 'flexRadioDefault4':
                        col.style.display = price >= 400000 && price < 500000 ? 'block' : 'none';
                        break;
                    case 'flexRadioDefault5':
                        col.style.display = price > 500000 ? 'block' : 'none';
                        break;
                }
            });
        });
    });
}

function handleCheckboxChange() {
    //Cập nhật biến checkboxChecked
    checkboxChecked = Array.from(colorCheckboxes).some(cb => cb.checked) || Array.from(sizeCheckboxes).some(cb => cb.checked);

    // Cập nhật checkboxChecked
    var colorChecked = Array.from(colorCheckboxes).some(cb => cb.checked);
    var sizeChecked = Array.from(sizeCheckboxes).some(cb => cb.checked);

    // Duyệt qua tất cả các 'col'
    cols.forEach(function (col) {
        // Lấy thẻ 'div' trong '.card-body'
        var divInCardBody = col.querySelector('.card-body div');

        // Kiểm tra xem 'divInCardBody' có tồn tại không
        if (divInCardBody) {
            // Tách chuỗi class của 'divInCardBody' thành các từ riêng biệt
            var classes = divInCardBody.className.split(' ');

            // Lấy màu sắc từ chuỗi class đầu tiên và size từ chuỗi class thứ hai
            var colorClass = classes[0];
            var sizeClass = classes[1];

            // Biến để kiểm tra xem color và size có khớp với bất kỳ checkbox nào được chọn không
            var colorMatches = Array.from(colorCheckboxes).some(function (cb) {
                return cb.checked && cb.id.trim().toLowerCase() === colorClass.trim().toLowerCase();
            });
            var sizeMatches = Array.from(sizeCheckboxes).some(function (cb) {
                return cb.checked && cb.id.trim().toLowerCase() === sizeClass.trim().toLowerCase();
            });

            // Nếu color hoặc size khớp với bất kỳ checkbox nào được chọn
            if (colorMatches || sizeMatches) {
                // Hiển thị 'col' này
                col.style.display = 'block';
            } else {
                // Ẩn 'col' này
                col.style.display = 'none';
            }
        }
    });

    // Nếu không có checkbox nào được chọn, hiển thị 8 'col' ban đầu
    if (!colorChecked && !sizeChecked && radioChecked) {
        handleRadioChange();
    }
    else if (!colorChecked && !sizeChecked && !radioChecked) {
        cols.forEach(function (col, index) {
            if (index < 8) {
                col.style.display = 'block';
            } else {
                col.style.display = 'none';
            }
        });
    }
}

function checkAndHandleRadio() {
    // Cập nhật biến checkboxChecked
    var checkboxChecked = Array.from(colorCheckboxes).some(cb => cb.checked) || Array.from(sizeCheckboxes).some(cb => cb.checked);

    // Nếu không có checkbox nào được chọn nhưng vẫn còn radio đang được chọn
    if (!checkboxChecked && radioChecked) {
        handleRadioChange();
    }
}

colorCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        // Update colorChecked
        colorChecked = Array.from(colorCheckboxes).some(cb => cb.checked);
        handleCheckboxChange();
        setTimeout(checkAndHandleRadio, 0);
    });
});

sizeCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        // Update sizeChecked
        sizeChecked = Array.from(sizeCheckboxes).some(cb => cb.checked);
        handleCheckboxChange();
        setTimeout(checkAndHandleRadio, 0);
    });
});

radios.forEach(function (radio) {
    radio.addEventListener('change', function () {
        // Update radioChecked
        radioChecked = Array.from(radios).some(r => r.checked);
        handleCheckboxChange();
        setTimeout(checkAndHandleRadio, 0);
    });
});

function uncheckAll() {
    // Get all checkbox and radio button elements
    var inputs = document.querySelectorAll('input[type="checkbox"], input[type="radio"]');
    var cols = Array.from(document.querySelectorAll('.col'));

    // Loop through the input elements and uncheck them
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    }

    // Loop through the .col elements and set their display property to 'block' for the first 8 and 'none' for the rest
    for (var i = 0; i < cols.length; i++) {
        if (i < 8) {
            cols[i].style.display = 'block';
        } else {
            cols[i].style.display = 'none';
        }
    }
}

document.getElementById('loadMore').addEventListener('click', function (event) {
    if (checkboxChecked || radioChecked) {
        event.preventDefault();
    } else {
        // Initialize counter
        var counter = 0;

        // Loop through the product cards
        for (var i = 0; i < cards.length; i++) {
            // If the card is hidden, show it
            if (cards[i].closest('.col').style.display === 'none') {
                cards[i].closest('.col').style.display = 'block';
                counter++;  // Increment counter

                // If 8 cards have been shown, exit the loop
                if (counter === 8) {
                    break;
                }
            }
        }
    }
});

var cards = Array.from(document.querySelectorAll('.card'));
var products = cards.map(function (card) {
    var img = card.querySelector('.card-img-top').getAttribute('src');
    var text = card.querySelector('.card-body p').textContent;
    var value = card.querySelector('.card-footer a').getAttribute('value');
    return [img, text, value];
});

localStorage.setItem('products', JSON.stringify(products));