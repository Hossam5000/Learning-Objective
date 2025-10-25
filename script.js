// vars & cons
const storedData = JSON.parse(localStorage.getItem("data")) || [];
saveBtn = document.querySelector(".btn-save");
ingredName = document.querySelector(".ingred-name");
ingredValue = document.querySelector(".ingred-value");

// functions
function save() {
    const name = ingredName.value.trim();
    const value = ingredValue.value.trim();
    const ingred = {
        "ingred": name,
        "value": value,
    };

    if (name && value) {
        // add new ingreds
        storedData.push(ingred);
        localStorage.setItem("data", JSON.stringify(storedData));

        // clear inputs
        ingredName.value = "";
        ingredValue.value = "";
    }
    else {
        console.log("please enter any value")
    }
}


// events
saveBtn.addEventListener("click", save);
window.addEventListener("load", () => {

});

// test
console.log(storedData)
