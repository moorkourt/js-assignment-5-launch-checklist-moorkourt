

window.addEventListener("load", function() {
let form = document.querySelector('form');
form.addEventListener("submit", function(event){
    formSubmission(
        document,
        listedPlanets, 
        form.elements["pilotName"].value,
        form.elements["copilotName"].value,
        form.elements["fuelLevel"].value,
        form.elements["cargoMass"].value
    ); 
        
    event.preventDefault();
});

   let listedPlanets;
   
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
       const randomPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(
         document,
         randomPlanet.name,
         randomPlanet.diameter,
         randomPlanet.star,
         randomPlanet.distance,
         randomPlanet.moons,
         randomPlanet.image
       );
     })
     .then(function() {
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});