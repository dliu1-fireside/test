//this is just a test 
const monthsArray = ['January', 'Feb', 'March','April','May','June','July','August','September','October','November','December'];

const dayGenerator = () => {
     return Math.floor((Math.random() * 31));
}

const monthGenerator = () => {
     const randomNum = Math.floor(Math.random() * 12);
     return monthsArray[randomNum];
}

const parentFunction = (day, month) => {
     console.log(`Your random birthday is ${month} ${day}.`)
     return `Your random birthday is ${month} ${day}.`
}

parentFunction(dayGenerator(),monthGenerator());