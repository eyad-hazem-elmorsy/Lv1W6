let p1, p4, p3;

await fetch('https://fakestoreapi.com/products/1')
.then(res=>res.json())
.then(json=>p1 = json.price);

await fetch('https://fakestoreapi.com/products/4')
.then(res=>res.json())
.then(json=>p4 = json.price);

await fetch('https://fakestoreapi.com/products/3')
.then(res=>res.json())
.then(json=>p3 = json.price);

console.log(3 * p1 + 4 * p4 + 5 * p3);
