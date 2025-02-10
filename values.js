const computer = {
    brand: 'lenevo',
    price: 35000,
    processor: 'intel',
    hdd: '512gb',
    monitor: 'dell'
}
const values = Object.values(computer);
// console.log(values)

delete computer.brand;
console.log(computer)
