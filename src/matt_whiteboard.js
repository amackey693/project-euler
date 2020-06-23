const makeSound = (sound) => ({
  sound: () => {
    return sound;
  }
});

const faucet = makeSound("Drip drip drip.");
const oldCar = makeSound("Grumble grumble");
const sleepyBear = makeSound("Grrr...yawn");

// First use closures to create three dance moves. For instance, 
// a dancer should be able to do the following:

// > dancer.samba()
// "The dancer sambas!"
// > dancer.tango()
// "The dancer tangos!"
// Then add the dance moves to a dancer.

const canTango = () => ({
  tango: () => {
    return "The dancer can tango";
  }
});

const canSamba = () => ({
  samba: () => {
    return "The dancer can samba";
  }
});

const canSalsa = () => ({
  salsa: () => {
    return "The dancer can salsa";
  }
});

const isDancer = () => {
  let dancer = {}

  return {...dancer, ...canTango(), ...canSamba(), ...canSalsa()};
}

const dancer = isDancer();
