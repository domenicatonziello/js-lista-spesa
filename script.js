console.log('JS OK');

// PREPARO LA LISTA
const shoppingList = ['acqua', 'pane', 'pomodori', 'latte'];

// PRENDO ELEMENTI DAL DOM
const result = document.getElementById('result');

// Preparo lista
let myList = '<ul>'


//* CICLO WHILE
// preparo condizione fuori dal ciclo
let i= 0;

while (i < shoppingList.length){
    myList += `<li> ${shoppingList[i]} </li>`;
    i++
}

myList += '</ul>'

result.innerHTML = myList;
