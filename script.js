const fullName = "Alexa Joerin";
let age = 32;
const birthday = "February 27";
const pineapplePizza = true;
let lifeEvents = [
  "I was born in Pontiac, Michigan.",
  "I went to Oakland University.",
  "I got the President's award when I was 10 years old.",
  "I love to learn new things.",
];

if (pineapplePizza === true) {
  console.log(
    `My name is ${fullName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${fullName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}

// different way of doing it:

// let hours = prompt("How many hours have you worked?");
// let wage = prompt("What is your current wage?");

// while (hours > 0 && wage > 0) {
//   if (hours > 40) {
//     let overTime = hours % 40;
//     let regularHours = hours - overTime;
//     let regularPay = regularHours * wage;
//     let overPay = wage * 1.5;
//     let overTimePay = overTime * overPay;
//     let totalPay = regularPay + overTimePay;
//     console.log(
//       `You worked ${hours} hours, with ${overTime} hours overtime. Your wage is ${wage} an hour, and is ${overPay} when clocking overtime. You have earned ${regularPay} with an additional ${overTimePay} dollars this week!. Your total income is ${totalPay}.`
//     );
//     break;
//   } else {
//     let pay = hours * wage;
//     console.log(
//       `You worked ${hours} hours this week, with a wage of ${wage} an hour. Earning you ${pay} dollars this week.`
//     );
//     break;
//   }
// }

const wage = 10;
const hours = 50;
if (hours <= 40) {
  const pay = wage * hours;
  const weeksUntilMillion = 1000000 / pay;
  console.log(pay);
  console.log(
    `It will take ${weeksUntilMillion} weeks until you make $1,000,000`
  );
} else {
  const extraHours = hours - 40;
  const overTime = extraHours * (wage * 1.5);
  const pay = 40 * wage + overTime;
  const weeksUntilMillion = 1000000 / pay;
  console.log(pay);
  console.log(
    `It will take ${weeksUntilMillion} weeks until you make $1,000,000`
  );
}
