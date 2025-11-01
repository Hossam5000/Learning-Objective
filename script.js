// vars & cons
const saveBtn = document.querySelector(".btn-save");
const ingredName = document.querySelector(".ingred-name");
const ingredValue = document.querySelector(".ingred-value");
let dataBase = [];

// functions
function save() {
    // vars & cons
    const name = ingredName.value.trim();
    const value = ingredValue.value.trim();
    const ingredObj = {
        "name": name,
        "value": value,
    }

    // ensure that data is filled
    if (!name) {
        alert("name field is required");
        return;
    }

    if (!value.length || isNaN(value)) {
        alert("Please, enter a valid value!");
        return;
    }

    // load dataBase
    dataBase = JSON.parse(localStorage.getItem("data")) || [];

    // push the savedObj to the dataBase 
    dataBase.push(ingredObj);

    // save to the dataBase
    localStorage.setItem("data", JSON.stringify(dataBase));

    // clear input fields
    ingredName.value = "";
    ingredValue.value = "";

    // test
    console.log(value.length)
}

function load() {
    // vars & cons
    dataBase = JSON.parse(localStorage.getItem("data")) || [];

    // test the logic
    dataBase.forEach(ele => {
        const storedName = ele.name;
        const storedValue = ele.value;

        console.log(storedName, storedValue);
    });
}
// events
saveBtn.addEventListener("click", save);


