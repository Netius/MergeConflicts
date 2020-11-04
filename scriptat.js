
    const randomNumber = document.getElementById("random-number");
    const textColor = document.getElementById("text-color");
    const colors = ["red", "pink", "blue", "green", "yellow"]
    setInterval(function () {
    randomNumber.innerHTML = (Math.floor((Math.random() * 5) ));
    textColor.style.backgroundColor = colors[randomNumber.innerHTML];
}, 1000);
