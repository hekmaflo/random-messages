console.log("hello world")

const messages ={
    partOne: ["hello", "goodbye", "hasta luego"],
    partTwo: ["boo", "baa", "haa"],
    partThree: ["one", "two", "three"]
};

function getRandom() {

    return Math.round(Math.random() * 10);
  }

  console.log(getRandom());

  console.log(messages.partOne.length)