


const args = process.argv.slice(2);


if (args.length !== 1) {
  console.error("Please provide exactly one number as an argument.");
  process.exit(1); 
}


const num = parseInt(args[0]);


if (isNaN(num)) {
  console.error("The argument must be a valid number.");
  process.exit(1); 
}

console.log(`Multiplication table of ${num}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}