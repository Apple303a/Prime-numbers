let primeNumbersArray = [];
let numbers = [];
let myBool = true; //if you click enter twice it will repeat the already shown prime numbers

function primeNumbers(a) {
    let beforeDate = Date.now(); //checking time before the caluculation
    console.log(beforeDate);

    function generatingNumbers() { // generating all numbers below the given input
        let b = a - 1;
        for (i = b; i > 1; i--) {
            numbers.push(i); //pushing numbers below the input in the numbers array
        }
    }
    generatingNumbers();

    function isItPrime(parameter) { // a funtion to check if the parameter is prime or not
        let anyFactor = false
        let checker = Math.floor(Math.sqrt(parameter))
        let counter = 0;
        while (checker - counter > 1) {
            if (parameter % (checker - counter) === 0) {
                anyFactor = true
                    //break;
            }
            counter++;
        }
        if (anyFactor === false) {
            primeNumbersArray.push(parameter);
        }
    }

    function calculatingPrime() { // checking if any number in the array numbers is prime
        for (let i = 0; i < numbers.length; i++) {
            const checkingNumber = numbers[i];
            isItPrime(checkingNumber);
        }
    }
    calculatingPrime();

    let afterDate = Date.now(); //to see the time after the calculation is done
    console.log(afterDate);

    console.log(afterDate - beforeDate); //finding the difference to see the time taken for calculation

    document.getElementById('label').innerText = primeNumbersArray;
}

function clickSubmit() {
    if (myBool === true) {
        let input = document.getElementById('number').value;
        primeNumbers(input);
        myBool = false;
    } else if (myBool === false) {
        alert('Do not click submit twice...Re-enter values');
        window.location.reload();
    }
}