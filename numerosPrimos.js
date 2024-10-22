function numerosPrimos(num) {
    if(num <= 1) return false;
    for (let i =2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true;
}

const end = 50;

for (let start = 1;start <= end; start++){
    if (numerosPrimos(start)) {
        console.log(start);
    }
}

export {
    numerosPrimos
}