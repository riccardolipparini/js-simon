// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const stamp = document.getElementById("container");

// creo 5 numeri casuali e li salvo dentro un array vuoto

const numbers = [];

const userNumbers = [];

generateNum();

for(i = 0; i < numbers.length; i++){

    document.getElementById("container").innerHTML += `
    <div class="numbers">
        <h1>${numbers[i]}</h1>
    </div>`
};

const clock = setInterval(() => {
    for (i = 0; i < numbers.length; i++)
    var domanda = parseInt(prompt("scrivi i numeri che ricordi"));
    userNumbers.push(domanda);
    
    clearInterval(clock);
    console.log(userNumbers);

}, 3000);