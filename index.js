import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSettings = {
    databaseURL: "https://playground-abcd3-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, 'shoppingList');


console.log(app);

const addBtn = document.querySelector('#add-button');
const inputEl = document.querySelector('#input-field');
const listEl = document.querySelector('#shopping-list');
const noItems = document.querySelector('.no-items');


onValue(shoppingListInDB, function(snapshot) {

    if (snapshot.exists()) {
        noItems.style.display = 'none';

        let goods = Object.entries(snapshot.val());
        console.log('Data from DB: ', goods);
    
        clearList();
    
        for (let i =0; i < goods.length; i++) {
    
    
            updateList(goods[i]);
        };
    } else {
        noItems.style.display = 'block';
        clearList();
        // updateList('😢');
        noItemsDisplay();
    }

});

function clearList () {
    listEl.innerHTML = '';
};

addBtn.addEventListener('click', () => {
    let inputValue = inputEl.value;

    // noItems.display = 'none';

    if (inputValue) {

        push(shoppingListInDB, inputValue);
        // console.log('Added to DB: ', inputValue);
        // updateList (inputValue);
        clearInput();
    }

});

// Changing object to array
// const list = Object.values(shoppingList);   // to get the values of the object
// const keys = Object.keys(shoppingList);    // to get the keys of the object
// const entries = Object.entries(shoppingList);  // to get the key-value pairs of the object

function clearInput () {
    inputEl.value = '';
};

function updateList (item) {
    // let listItem = `<li>${inputValue}</li>`;
    // listEl.innerHTML += listItem;

    let currentID = item[0];
    let currentData = item[1];

    let newEl = document.createElement('li');
    newEl.textContent = currentData;

    newEl.addEventListener('click', () => {
        let locationOfTheListInDB = ref(database, `shoppingList/${currentID}`);
        remove(locationOfTheListInDB);
        // console.log(currentID)
    });

    listEl.append(newEl);
};
function noItemsDisplay() {
    noItems.innerHTML = `
    <h2>😢</h2>
    <p>No items in the list</p>
    `
}