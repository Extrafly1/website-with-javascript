document.addEventListener("DOMContentLoaded", function() {
    var tabButtons = document.querySelectorAll(".tabButton");
    tabButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var target = this.dataset.target;
            var tabSections = document.querySelectorAll(".tabSection");
            tabSections.forEach(function(section) {
                section.classList.remove("active");
            });
            document.getElementById(target).classList.add("active");
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const formElements = document.getElementsByTagName('form');
    const infoElement = document.getElementById('info');
    const formCount = formElements.length;
    infoElement.textContent = 'N3 Form count: ' + formCount + ' ';
});


const inputElement = document.querySelector('.only_text');

inputElement.addEventListener('input', function(event) {
    const inputValue = event.target.value;
    const numericRegex = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

    if (numericRegex.test(inputValue)) {
        event.target.value = inputValue.replace(numericRegex, '');
    }
});