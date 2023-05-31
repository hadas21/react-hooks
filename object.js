let spaceship = {
  homePlanet: "Earth",
  color: "red",
};
let tryReassignment = (obj) => {
  obj = {
    identified: false,
    "transport type": "flying",
  };
  console.log(obj);
};
tryReassignment(spaceship);
console.log(spaceship);

// spaceship = {
//   identified: false,
//   "transport type": "flying",
// };
