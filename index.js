console.log("hello world")

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

const numOfKeys = Object.keys(messages);

const count = numOfKeys.length;

const finalOne = intro.partOne[getRandom(intro.partOne)];

const finalTwo = messages.partOne[getRandom(messages.partOne)];


console.log(finalOne + finalTwo);
console.log(getRandom(intro.partOne));
console.log(getRandom(messages.partOne));
console.log(numOfKeys);
console.log(count);









//   console.log(getRandom(messages.partOne.length));

//   console.log(messages.partOne.length)