let buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {

        let value = button.textContent;

        if (value === "C" || value === "CE") {
            display.value = "";
        }
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }
        else if (value === "=") {
            display.value = eval(display.value);
        }
        else {
            display.value += value;
        }

    });
});