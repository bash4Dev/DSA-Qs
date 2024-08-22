// Task 1
// We're analyzing if a planet is suitable for a space station.
let planet = {
    hasWater: true,
    hasAtmosphere: true,
    temperature: 15  // Temperature in the moderate range
};

let analysisResult = planet.hasWater
  ? (planet.hasAtmosphere
    ? (planet.temperature > 0
      ? (planet.temperature < 30
        ? 'Perfect for a space station!'
        : 'Temperature not suitable.')
      : 'Temperature too low.')
    : 'Lacks atmosphere.')
  : 'Unsuitable, no water detected.';

document.getElementById('planetAnalysis').textContent = analysisResult;


//Task 2
// Let's figure out which planets have moons
let planets = [
  { name: 'Mercury', hasMoons: false },
  { name: 'Venus', hasMoons: false },
  { name: 'Earth', hasMoons: true },
];
  
planets.forEach((planet) => {
  let moonMessage = planet.hasMoons ? `${planet.name} has moons` : `${planet.name} has no moons`;
  document.getElementById('cosmicInfo').textContent += moonMessage + " ";
});

// Task 3
// Define an object with properties to determine if it is an asteroid with the following keys: isRocky and isOrbiting.
const asteroidObj = {
  isRocky: true,
  isOrbiting: false
};
const {isRocky, isOrbiting} = asteroidObj;

const detectionStatus = (isRocky === true && isOrbiting === false) ? 'Asteroid detected!' : 'No asteroid detected.';

document.getElementById("detectionStatus").innerText = detectionStatus;