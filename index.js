import colors from "colors";
const args = process.argv.slice(2);
const x = args[0];
const n = args[1];

const Colors = {GREEN : 0, YELLOW: 1, RED : 2}
let currentColor = Colors.GREEN;

const changeColor = () => {
  currentColor++;
  if (currentColor > Colors.RED)
      currentColor = Colors.GREEN;
}

const showPrime = (primes) => {
  if (primes.length == 0) {
    console.log('В диапазоне нет простых чисел'.red)
  } else {
    primes.forEach(e => {
      switch (currentColor){
        case Colors.RED:
            console.log(`${e}`.red);
            break;
        case Colors.GREEN:
            console.log(`${e}`.green);
            break;
        case Colors.YELLOW:
            console.log(`${e}`.yellow);
            break;
    }
    changeColor();
      
    });
  }
}

const isPrime = (x, n) => {
  const primes = [];
  if (!isNaN(x) && !isNaN(n)) {
    nextPrime: 
    for (let i = x; i <= n; i++) {
      for (let j = 2; j <= Math.sqrt(i); j++) {
          if (i % j == 0) continue nextPrime; 
      }
    primes.push(i);      
    }
  } else {
    console.log('Граница диапазона не является числом'.red)
    return
  }
  showPrime(primes);  
}

isPrime(x, n)
