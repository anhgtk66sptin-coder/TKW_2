const activityCards = document.querySelectorAll(".activity-card");
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show-card");
        }

    });

}, {
    threshold: 0.2
});

activityCards.forEach(function(card) {
    observer.observe(card);
});
activityCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const title = card.querySelector(".card-title").innerText;
        const text = card.querySelector(".card-text").innerText;

        alert(title + "\n\n" + text);

    });

});
const topButton = document.createElement("button");
topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
topButton.className = "top-button";
document.body.appendChild(topButton);
window.addEventListener("scroll", function() {
    if (window.scrollY > 400) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }

});
topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});