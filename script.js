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



/*==================== PROJECT FILTER ====================*/

const projectFilters = document.querySelectorAll(".project-filter");
const projectCards = document.querySelectorAll(".project-card");

projectFilters.forEach((filter) => {
    filter.addEventListener("click", () => {

        const selectedCategory = filter.getAttribute("data-filter");

        projectFilters.forEach((btn) => {
            btn.classList.remove("active");
        });

        filter.classList.add("active");

        projectCards.forEach((card) => {

            const cardCategory = card.getAttribute("data-category");

            if (
                selectedCategory === "all" ||
                cardCategory === selectedCategory
            ) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }

        });

    });
});