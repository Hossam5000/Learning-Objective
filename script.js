// vars & cons
const storedData = [];
saveBtn = document.querySelector(".btn-save");
ingredName = document.querySelector(".ingred-name");
ingredValue = document.querySelector(".ingred-value");

// functions
function save() {
    const name = ingredName.value;
    const value = ingredValue.value;
    const ingred = {
        "ingred": name,
        "value": value,
    };
    const storedData = JSON.parse(localStorage.getItem("data")) || [];

    // add new ingreds
    storedData.push(ingred);
    localStorage.setItem("data", JSON.stringify(storedData));

    ingredName.value = "";
    ingredValue.value = "";
}

// events
saveBtn.addEventListener("click", save);


// test
console.log(ingredValue)