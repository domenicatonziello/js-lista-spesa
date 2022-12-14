console.log('JS OK');

// PREPARO LA LISTA
const shoppingList = ['acqua', 'pane', 'pomodori', 'latte'];

// PRENDO ELEMENTI DAL DOM
const result = document.getElementById('result');

// Preparo lista
// let myList = '<ul>'
const myList = document.createElement('ul');


//* CICLO WHILE
// preparo condizione fuori dal ciclo
let i= 0;

while (i < shoppingList.length){
    // myList += `<li> ${shoppingList[i]} </li>`;
    const elementList = document.createElement('li');
    elementList.append(shoppingList[i]);
    myList.appendChild(elementList);    
    i++
}

// myList += '</ul>'
// STAMPO IN PAGINA
// result.innerHTML = myList;
result.appendChild(myList);
