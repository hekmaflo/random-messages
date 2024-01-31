
//these are the messages used. would want to update the start of the sentece to be various objects.
const intro ={
    partOne: ["Hello there, ", "Goodbye,", "How do you feel about"]
};

const messages ={
    partOne: ["hello", "goodbye", "hasta luego"],
    partTwo: ["boo", "baa", "haa"],
    partThree: ["one", "two", "three"]
};

function getRandom(array) {
    length = array.length

    return Math.floor(Math.random() * length);
  }
// this segment is in charge of choosing a random key value pair from the message object
const numOfKeys = Object.keys(messages);
const count = Math.floor(Math.random() * numOfKeys.length);
const chooseMessageKey = messages[numOfKeys[count]];

// this grabs both the messages and puts them into a variable that will be logged.
const finalMessage = chooseMessageKey[getRandom(numOfKeys)];

const finalOne = intro.partOne[getRandom(intro.partOne)];




// Thi will log and cocactenate both messages.

console.log(finalOne + finalMessage);

















// // const finalTwo = messages.partOne[getRandom(messages.partOne)];


// console.log(finalOne + finalTwo);
// console.log(getRandom(intro.partOne));
// console.log(getRandom(messages.partOne));
// console.log(numOfKeys);
// console.log(count);
// console.log(chooseMessageKey);
// console.log(finalMessage);







//   console.log(getRandom(messages.partOne.length));

//   console.log(messages.partOne.length)