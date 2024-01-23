let principal, rate, time;

principal = 2_000;
rate = 0.2;
time = 60;

let totalAmount = principal * (1 + rate) * time;
console.log(`The total amount is : ${totalAmount}`);

const arrInvestments = [
  [500, 0, 2, 24],
  [750, 0.3, 18],
  [1000, 0.2, 36],
];

let calculateInvestment = "";

for (let x of arrInvestments) {
  calculateInvestment += x[0] * (1 + x[1]) * x[2];
}
console.log(`The total investment caluculated is: ${calculateInvestment}`);

let futureValues = arrInvestments.map(
  (arrInvestment) =>
    arrInvestment[0] * (1 + arrInvestment[1]) * arrInvestment[2]
);
console.log(`The future values are: ${futureValues}`);

let aboveMin = futureValues.filter((futureValue) => futureValue > 20000);
console.log(aboveMin);
