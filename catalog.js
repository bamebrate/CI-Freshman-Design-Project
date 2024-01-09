let buttons = document.querySelectorAll(".addToCart");

buttons.forEach((button) => {

    button.addEventListener("click", function () {
        button.innerHTML = "Added!";
        setTimeout(function () {
            button.innerHTML = "Add to Cart";
        }, 3000);
    });
});
