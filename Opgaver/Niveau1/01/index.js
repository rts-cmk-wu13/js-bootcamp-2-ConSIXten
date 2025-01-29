let button = document.querySelector(".btn");
let colors = ["blue", "red"];

button.addEventListener("click", () => {
    button.classList.toggle("active");
    button.style.backgroundColor = button.classList.contains("active") ? colors[1] : colors[0];
});
