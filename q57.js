let number = 20;

function checkPrime() {
    let isPrime = true;

    if (number <= 1) {
        isPrime = false;
    } else {
    
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(number + " is a prime number");
    } else {
        console.log(number + " is not a prime number");
    }
}

checkPrime();
