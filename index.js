const products = [
  { name: "book", price: 5000 },
  { name: "pen", price: 3000 },
  { name: "paper", price: 500 },
];

const transactions = [];

console.log("======================================");
console.log("Welcome to online shop");
console.log("======================================");

console.log("Product List : ");

products.forEach((product, index) => {
  console.log(index + 1 + ". " + product.name + " : Rp. " + product.price);
});

let loop = true;

do {
  const productOption = parseInt(prompt("Please input the product"));
  const selectedProduct = products[productOption - 1];

  console.log("You choose " + selectedProduct.name);

  const amount = parseInt(prompt("How much you want to buy ?"));
  const subtotal = selectedProduct.price * amount;
  console.log("The subtotal is " + subtotal);

  transactions.push({ product: selectedProduct, amount });

  const confirmation = prompt("Do you want to add another product (y/n) ?");
  loop = confirmation === "y";
} while (loop);

const total = transactions
  .map((transaction) => transaction.product.price * transaction.amount)
  .reduce((prev, curr) => prev + curr, 0);

console.log("You need to pay Rp. " + total);

const money = parseInt(prompt("Please input your money"));
const change = money - total;

if (change >= 0) {
  console.log("Your change is Rp. " + change);
} else {
  console.log("You need more money");
}
