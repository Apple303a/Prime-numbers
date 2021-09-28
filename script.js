let primeNumbersArray = [];
let numbers = [];

function primeNumbers(a) {
    let beforeDate = Date.now();
    console.log(beforeDate);

    function generatingNumbers() {
        let b = a - 1;
        for (i = b; i > 1; i--) {
            numbers.push(i);
        }
    }
    generatingNumbers();

    function isItPrime(parameter) {
        let anyFactor = false
        let checker = Math.floor(Math.sqrt(parameter))
        let counter = 0;
        while (checker - counter > 1) {
            if (parameter % (checker - counter) === 0) {
                anyFactor = true
                break;
            }
            counter++;
        }
        if (anyFactor === false) {
            primeNumbersArray.push(parameter);
        }
    }

    function calculatingPrime() {
        for (let i = 0; i < numbers.length; i++) {
            const checkingNumber = numbers[i];
            isItPrime(checkingNumber);
        }
    }
    calculatingPrime();

    let afterDate = Date.now();
    console.log(afterDate);

    console.log(afterDate - beforeDate);

    document.getElementById('label').innerText = primeNumbersArray;
}

function clickSubmit() {
    let input = document.getElementById('number').value;
    primeNumbers(input);
}