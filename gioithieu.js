
const memberCards = document.querySelectorAll(".member-card");

memberCards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function() {
        card.style.transform = "translateY(0)";
    });
});
const memberImages = document.querySelectorAll(".member-img");

memberImages.forEach(function(image) {
    image.addEventListener("mouseenter", function() {
        image.style.transform = "scale(1.08)";
    });

    image.addEventListener("mouseleave", function() {
        image.style.transform = "scale(1)";
    });
});
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-member");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

memberCards.forEach(function(card) {
    observer.observe(card);
});
memberCards.forEach(function(card) {
    card.addEventListener("click", function() {
        const name = card.querySelector(".member-name");
        const role = card.querySelector(".member-role");

        if (name && role) {
            alert(
                "Thành viên: " + name.innerText +
                "\nChức vụ: " + role.innerText
            );
        }
    });
});