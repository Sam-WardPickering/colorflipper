const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const bttn = document.getElementById("bttn");
const color = document.querySelector(".color");


bttn.addEventListener('click', function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});





function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

document.getElementById('homeButtonIcon').addEventListener('click', returnHome);

function returnHome() {
    window.location.href="https://sam-wardpickering.github.io/";
}