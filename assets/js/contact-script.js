// EmailJS Contact Service Code

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_r17121989w', 'contact_form', this)
            .then(function () {
                window.location.href = 'https://rafaela-wetzel.github.io/witchtanic-hellucinations/contact-confirmation.html';
            }, function (error) {
                alert('Unfortunately your message has not been sent due to an error. Please try again.');
            });
    });
};
