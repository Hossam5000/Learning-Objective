// vars & cons
const saveBtn = document.querySelector(".btn-save");
const ingredName = document.querySelector(".ingred-name");
const ingredValue = document.querySelector(".ingred-value");
const ingredList = document.querySelector(".ingred-list");
let dataBase = [];

// vars & cons -- test
// level 1

let activeLi = null;

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

        //========= ingredient name ele =========
        //--ingredient name ele --creation
        const loadedIngredName = document.createElement("input");

        //--ingredient name ele --content
        loadedIngredName.value = ele.name;

        //--ingredient name ele --attributes
        loadedIngredName.disabled = true;
        loadedIngredName.type = "text";

        //--ingredient name ele --styles
        loadedIngredName.classList.add("stored-name");

        li.append(loadedIngredName);

        //========= ingredient value ele =========
        //--ingredient value ele --creation
        const loadedIngredValue = document.createElement("input");

        //--ingredient value ele --content
        loadedIngredValue.value = ele.value;

        //--ingredient value ele --attributes
        loadedIngredValue.type = "number";
        loadedIngredValue.disabled = true;

        //--ingredient value ele --styles
        loadedIngredValue.classList.add("stored-value");

        //--ingredient value ele --append
        li.append(loadedIngredValue);

        //=========ingredient edit button=========
        // --creation
        const editBtn = document.createElement("button");

        // --attributes
        editBtn.type = "button";
        editBtn.classList.add("ingred-edit");


        //--creating the icon
        const editIcon = document.createElement("i");
        editIcon.classList.add("fa-solid", "fa-pen-to-square");
        editBtn.append(editIcon);



        li.append(editBtn);

        // functions
        function editLi(e) {
            // enable name input field
            const li = e.target.closest("li");
            const nameInput = li.querySelector(".stored-name");

            nameInput.disabled = false;
            nameInput.focus();

            // enable value input field
            const valueInput = li.querySelector(".stored-value");

            valueInput.disabled = false;

            // update the gloabal activeLi
            activeLi = li;

        };

        function blurFuntion(e) {
            e.target.disabled = true;
        }

        // adding events
        editBtn.addEventListener("click", editLi);
        loadedIngredName.addEventListener("blur", blurFuntion);
        loadedIngredValue.addEventListener("blur", blurFuntion);
        li.addEventListener("blur", blurFuntion);


        ingredList.append(li);
    });
}
// events
saveBtn.addEventListener("click", save);
window.addEventListener("load", load);
document.addEventListener("click", function (e) {
    if (activeLi && !activeLi.contains(e.target)) {
        const nameInput = activeLi.querySelector(".stored-name");
        const valueInput = activeLi.querySelector(".stored-value");

        nameInput.disabled = true;
        valueInput.disabled = true;

        activeLi = null;
    }
});

