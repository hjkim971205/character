// Business Logic
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  
// User Interface Logic
function hideResult(){
    document.getElementById("result").setAttribute("class", "hidden");
}

window.onload = function () {
    hideResult();
}

function createCharacter(event) {
    event.preventDefault();
    const classOption = document.getElementById("class").value;

    //name generator
    document.querySelector("span#charName").innerText = document.getElementById("nameInput").value;

    //stat generator
    let result;
    min = 5;
    max = 10;

    if (classOption === "Warrior") {
        const stat = "Strength:  " + getRandomIntInclusive(min,max) + "\n"+ "Intelligence:  " + getRandomIntInclusive(min-3,max-3) + "\n" + "Dexterity:  " + getRandomIntInclusive(min-2,max-2) + "\n" + "Swiftness:  " + getRandomIntInclusive(min-1,max-1) + "\n" + "Defense:  " + getRandomIntInclusive(min,max);
        result = stat;
    } else if (classOption === "Mage") {
        const stat = "Strength:  " + getRandomIntInclusive(min-3,max-3) + "\n"+ "Intelligence:  " + getRandomIntInclusive(min,max) + "\n" + "Dexterity:  " + getRandomIntInclusive(min-1,max-1) + "\n" + "Swiftness:  " + getRandomIntInclusive(min-2,max-2) + "\n" + "Defense:  " + getRandomIntInclusive(min,max);
        result = stat;
    } else if (classOption === "Hunter") {
        const stat = "Strength:  " + getRandomIntInclusive(min-1,max-1) + "\n"+ "Intelligence:  " + getRandomIntInclusive(min-2,max-2) + "\n" + "Dexterity:  " + getRandomIntInclusive(min-3,max-3) + "\n" + "Swiftness:  " + getRandomIntInclusive(min,max) + "\n" + "Defense:  " + getRandomIntInclusive(min,max);
        result = stat;
    } else if (classOption === "Assassin") {
        const stat = "Strength:  " + getRandomIntInclusive(min-3,max-3) + "\n"+ "Intelligence:  " + getRandomIntInclusive(min-2,max-2) + "\n" + "Dexterity:  " + getRandomIntInclusive(min,max) + "\n" + "Swiftness:  " + getRandomIntInclusive(min-1,max-1) + "\n" + "Defense:  " + getRandomIntInclusive(min,max);
        result = stat;
    }

    document.getElementById("output").innerText = result;
    document.querySelector("div#result").removeAttribute("class");
    // the code to get and process form values will go here!
}

window.addEventListener("load", function () {
    const form = document.getElementById("character");
    form.addEventListener("submit", createCharacter);
});