


const args = process.argv.slice(2);


if (args.length !== 1) {
  console.error("Please provide exactly one string as an argument.");
  process.exit(1); 
}


const inputString = args[0];


const reversedString = inputString.split("").reverse().join("");


console.log(reversedString);