function randomNum(max, min){
    return Math.floor(Math.random() * (max - min) + min);
}

function generateNum(){
    const numbers = [];
    while (numbers.length < 5) {
        let num = randomNum(100, 1);
        if (numbers.includes(num) === false) {
            numbers.push(num);
        }
    }
    return numbers;
}