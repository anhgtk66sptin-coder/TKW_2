
const btn = document.getElementById("themeToggle");
const icon = btn.querySelector("i");

btn.onclick = function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
};
const input = document.getElementById("searchMember");
const members = document.querySelectorAll(".member-card");

input.addEventListener("input", function () {
    const value = this.value.toLowerCase().trim();

    members.forEach(function (card) {
        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});