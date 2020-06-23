// Problem #1
// Compose a function called paint() and then add it to three different painters. Each painter can only paint with one color. This should be the end result:
// > painter1.paints()
// "Paints green!"
// > painter2.paints()
// "Paints yellow!"
// > painter3.paints()
// "Paints red!"

const canPaint = (color) => {
  const obj = {
    paints: () => {
      return `Paints ${color}!`
    }
  }
  return obj;
}

const painter1 = canPaint("green")
const painter2 = canPaint("yellow")
const painter3 = canPaint("red")

// Problem #3
// Compose a function called throw(). The throw() function should determine the distance and speed a battle robot can throw a spear. This function should be unary, so you will need to use currying.

// Next, add the throw() function to multiple battle robots. A result might look something like this:

// > battleRobot1.throw();
// "The battle robot throws the spear 100 yards at 200 miles per hour!"


const canThrow = (item) =>  {
  return function (distance) {
    return function(miles) {
      return `The battle robot throws the ${item} ${distance} yards at ${miles} per hour!`
    }
  } 
}

const createProp = () => {
  const obj = {
    throws: () => {
      return canThrow("spear")(100)(200)
    }
  }
  return obj;
}

