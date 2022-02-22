//вывод в консоль 1 5 6 2 3 4

console.log('Record 1'); //синхронный код исполняется в фазе poll 1 tick

setTimeout(() => {
    console.log('Record 2'); // зарегистрированный timer исполняется во 2 tick 
    Promise.resolve().then(() => { 
        setTimeout(() => {  // resolve promise регистрирует timer на 3 tick
            console.log('Record 3'); // зарегистрированный timer исполняется в 3 tick
            Promise.resolve().then(() => {
                console.log('Record 4'); // resolve promise исполняется сразу после "3"
            });
        });
    });
});

console.log('Record 5'); //синхронный код исполняется в фазе poll 1 tick

Promise.resolve().then(() => Promise.resolve().then(() => console.log('Record 6'))); //микрозадача исполняется сразу после завершения текущей фазы - в 1 tick после "1" и "5"