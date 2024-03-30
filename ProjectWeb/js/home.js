document.querySelectorAll('.dropdown-menu a.dropdown-toggle').forEach(function(element) {
    element.addEventListener('click', function (e) {
        var _d = e.target.closest('.dropdown'); 
        if (_d) {
            _d.classList.toggle('show');
            _d.querySelector('.dropdown-menu').classList.toggle('show');
            _d.querySelector('.dropdown-toggle').setAttribute('aria-expanded', _d.classList.contains('show'));
        }
        e.preventDefault();
        e.stopPropagation();
    });
});

// Close dropdowns when anywhere else in the document is clicked
document.addEventListener('click', function (e) {
    var _d = document.querySelector('.dropdown.show');
    if (_d) {
        _d.classList.remove('show');
        _d.querySelector('.dropdown-menu').classList.remove('show');
        _d.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
    }
});