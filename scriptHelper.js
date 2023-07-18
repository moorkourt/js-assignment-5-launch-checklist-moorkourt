
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                  <li>Name: ${name}</li>
                  <li>Diameter: ${diameter}</li>
                  <li>Star: ${star}</li>
                  <li>Distance from Earth: ${distance}</li>
                  <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
}

function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    }else if (isNaN(testInput) === true){
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   const pilotValidate = validateInput(pilot);
   const copilotValidate = validateInput(copilot);
   const fuelLevelValidate = validateInput(fuelLevel);
   const cargoLevelValidate = validateInput(cargoLevel);
 
   if (pilotValidate === "Empty" ||
    copilotValidate === "Empty" ||
    fuelLevelValidate === "Empty" ||
    cargoLevelValidate === "Empty") {
        alert ("All fields are required!");
    } 
     if ( pilotValidate === "Is a Number" ||
        copilotValidate === "Is a Number" ||
        fuelLevelValidate === "Not a Number" ||
        cargoLevelValidate === "Not a Number"){
            alert ("Make sure to enter valid information for each field!")
        };
        const pilotStatus = document.getElementById("pilotStatus");
        const copilotStatus = document.getElementById("copilotStatus");
        const fuelStatus = document.getElementById("fuelStatus");
        const cargoStatus = document.getElementById("cargoStatus");
        const faultyItems = document.getElementById("faultyItems");
        const launchStatus = document.getElementById("launchStatus");

        pilotStatus.innerHTML = `Pilot ${pilot} Ready`;
        copilotStatus.innerHTML = `Copilot ${copilot} Ready`;

        if (fuelLevel < 10000){
            fuelStatus.innerHTML = "Fuel level too low for launch";
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch";
        } else {
            fuelStatus.innerHTML = "Fuel level good for launch";
        }; 

        if (cargoLevel > 10000){
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "#C7254E";
            launchStatus.innerHTML = "Shuttle not ready for launch";
        } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        };

        if (fuelLevel > 10000 && cargoLevel < 10000){
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "#419F6A";
            faultyItems.style.visibility = "visible";
        }

}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
  
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
