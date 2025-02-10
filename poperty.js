const bottle = {
    brand: 'apple',
    price: 45,
    color: 'white'
}

// console.log(bottle);

// dot notation
// console.log(bottle.brand)

const pay = bottle.price;
// console.log(pay);


// bracket notation
// third bracket diye access kora
// console.log(bottle['color'])

const rong = bottle['color'];
// console.log(rong);


// dot notation and bracket notation diye value update kora jay.
bottle.color = 'red';
bottle['price'] =100;
console.log(bottle)


