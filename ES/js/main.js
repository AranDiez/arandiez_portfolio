document.addEventListener('DOMContentLoaded', function() {
    var linkElement = document.querySelector('.link');
    var linksSectionElement = document.querySelector('.linkssection');

    linkElement.addEventListener('click', function() {
        linksSectionElement.classList.add('unhidden');
    });
});