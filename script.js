console.log('JS OK');

// PREPARO LA LISTA
const shoppingList = ['acqua', 'pane', 'pomodori', 'latte'];

// PRENDO ELEMENTI DAL DOM
const result = document.getElementById('result');

// Preparo 
let myList = '<ul>'


// CICLO WHILE
let i= 0;
while (i < shoppingList.length){
    myList += `<li> ${shoppingList[i]} </li>`;
    i++
}

myList += '</ul>'

result.innerHTML = myList;
