document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("my-button");
    let isToggled = false;
    
    button.addEventListener("click", function () {
        if (isToggled) {
            button.style.backgroundColor = "blue";
        } else {
            button.style.backgroundColor = "red";
        }
        isToggled = !isToggled;
    });
});