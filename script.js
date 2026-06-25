// Initialize EmailJS
(function () {
    emailjs.init({
        publicKey: "Ut5LiAGDWl3a7UFAe",
    });
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_49765f7",
        "template_3gz97no",
        this
    )
    .then(() => {
        alert("Message Sent Successfully!");
        form.reset();
    })
    .catch((error) => {
        console.error(error);
        alert("Failed to Send Message");
    });
});