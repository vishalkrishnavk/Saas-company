const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("navigation");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});
