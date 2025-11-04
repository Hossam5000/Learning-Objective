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

    if (isNaN(value)) {
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
    ingredValue.value = 0;

    // load the last saved items
    load();
}

function load() {
    // vars & cons
    dataBase = JSON.parse(localStorage.getItem("data")) || [];
    ingredList.innerHTML = "";

    // creating <li>(s) for each data entry
    dataBase.forEach(ele => {

        // creating <li>(s)
        const li = document.createElement("li");
        li.classList.add("stored-ingred")

        //--ingredient name ele 
        const loadedIngredName = document.createElement("span");
        loadedIngredName.innerHTML = ele.name;
        loadedIngredName.classList.add("stored-name");

        li.append(loadedIngredName);

        //--ingredient value ele
        const loadedIngredValue = document.createElement("span");
        loadedIngredValue.innerHTML = ele.value;
        loadedIngredValue.classList.add("stored-value");

        li.append(loadedIngredValue);

        //--ingredient edit button
        const editBtn = document.createElement("button");
        editBtn.type = "button";
        editBtn.classList.add("ingred-edit");
        //--creating the icon
        const editIcon = document.createElement("i");
        editIcon.classList.add("fa-solid", "fa-pen-to-square");
        editBtn.append(editIcon);



        li.append(editBtn);


        ingredList.append(li);
    });
}
// events
saveBtn.addEventListener("click", save);
window.addEventListener("load", load);


