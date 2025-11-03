// vars & cons
const saveBtn = document.querySelector(".btn-save");
const ingredName = document.querySelector(".ingred-name");
const ingredValue = document.querySelector(".ingred-value");
const ingredList = document.querySelector(".ingred-list");
let dataBase = [];

// functions
function save() {
    // vars & cons
    const name = ingredName.value.trim();
    const value = parseFloat(ingredValue.value.trim());
    const ingredObj = {
        "name": name,
        "value": value,
    }

    // ensure that data is filled
    if (!name) {
        alert("name field is required");
        return;
    }

    if ((value.length == 0) || isNaN(value)) {
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
}

function load() {
    // vars & cons
    dataBase = JSON.parse(localStorage.getItem("data")) || [];

    // test the logic
    dataBase.forEach(ele => {

        // creating <li>(s)
        const li = document.createElement("li");
        //--ingredient name ele 
        const loadedIngredName = document.createElement("span");
        loadedIngredName.innerHTML = ele.name;
        loadedIngredName.classList.add("storedName");

        li.append(loadedIngredName);

        //--creating ingredient value ele
        const loadedIngredValue = document.createElement("span");
        loadedIngredValue.innerHTML = ele.value;
        loadedIngredValue.classList.add("storedValue");

        li.append(loadedIngredValue);
        ingredList.append(li);

        // test
        console.log(li);
    });
}
// events
saveBtn.addEventListener("click", save);
window.addEventListener("load", load);


