const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function () {
  const keyword = searchInput.value.trim().toLowerCase();
  if (keyword === "") {
    alert("Vui lòng nhập từ khóa cần tìm!");
    return;
  }
  const sections = document.querySelectorAll(".section");
  let found = false;
  sections.forEach(function (section) {
    const text = section.innerText.toLowerCase();
    if (text.includes(keyword) && !found) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      section.classList.add("search-found");
      setTimeout(function () {
        section.classList.remove("search-found");
      }, 2000);
      found = true;
    }
  });
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchButton.click();
    }
    });

  if (!found) {
    alert("Không tìm thấy: " + keyword);
  }
});