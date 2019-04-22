function generatePlanet() {
  let world = {
    size: Math.ceil(Math.random() * 5),
    numberOfTrees: null,
    animalLife: null,
    averageSoilFertility: null,
    ores: {
      copper: null,
      lead: null,
      nickle: null,
      tin: null,
      aluminum: null,
      zink: null,
      iron: null
    },
    preciousMetals: {
      gold: null,
      silver: null,
      platinum: null
    },
    radioactive: {
      uranium: null,
      thorium: null,
      potassium: null
    },
    grid: [[], [], [], [], []]
  };
  
  //Set the basic number of resources start <----------------->
  world.numberOfTrees = Math.ceil(Math.sqrt((10 + world.size)**4**2));
  world.animalLife = Math.floor((Math.ceil(Math.sqrt((10 + world.size)**4**2))) / 5);
  world.averageSoilFertility = Math.round(Math.random() * 50) + 45;
  
  Object.keys(world.ores).forEach(ore => {
    world.ores[ore] = Math.floor((Math.ceil(Math.sqrt((10 + world.size)**4**2))) / (Math.floor(Math.random() * 75) + 100));
  });
  
  Object.keys(world.preciousMetals).forEach(metal => {
    world.preciousMetals[metal] = Math.floor((Math.ceil(Math.sqrt((10 + world.size)**4**2))) / (Math.floor(Math.random() * 200) + 150));
  });
  
  Object.keys(world.radioactive).forEach(iso => {
    world.radioactive[iso] = Math.floor((Math.ceil(Math.sqrt((10 + world.size)**4**2))) / (Math.floor(Math.random() * 300) + 200));
  });

  //End <--------------------------->

  //Start: Create Temp Variables for resources (Used for subtraction) <---------------->
  let tempNumberOfTrees = world.numberOfTrees;
  let tempAnimalLife = world.animalLife;
  let tempOres = {
    copper: world.ores.copper,
    lead: world.ores.lead,
    nickle: world.ores.nickle,
    tin: world.ores.tin,
    aluminum: world.ores.aluminum,
    zink: world.ores.zink,
    iron: world.ores.iron
  };
  let tempPreciousMetals = {
    gold: world.preciousMetals.gold,
    silver: world.preciousMetals.silver,
    platinum: world.preciousMetals.platinum
  };
  let tempRadioactive = {
    uranium: world.radioactive.uranium,
    thorium: world.radioactive.thorium,
    potassium: world.radioactive.potassium
  };
  //End <------------------->

  //Start: Loop for creating the 5 rows in the grid <----------------------->
  for(let i = 0;i < 5;i++) {
    //Start: Divide each set of elements equally for the 5 rows then subtract that value from the temp values (Used for final iteration) <--------------->
    let rowSize = tempNumberOfTrees / (5 - i);
    tempNumberOfTrees -= rowSize;

    let rowAnimal = tempAnimalLife / (5 - i);
    tempAnimalLife -= rowAnimal;
    
    let rowOres = {
      copper: world.ores.copper / (5 - i),
      lead: world.ores.lead / (5 - i),
      nickle: world.ores.nickle / (5 - i),
      tin: world.ores.tin / (5 - i),
      aluminum: world.ores.aluminum / (5 - i),
      zink: world.ores.zink / (5 - i),
      iron: world.ores.iron / (5 - i)
    };

    Object.keys(rowOres).forEach(ore => {
      tempOres[ore] -= rowOres[ore];
    });

    let rowPreciousMetals = {
      gold: world.preciousMetals.gold / (5 - i),
      silver: world.preciousMetals.silver / (5 - i),
      platinum: world.preciousMetals.platinum / (5 - i)
    };

    Object.keys(rowPreciousMetals).forEach(metal => {
      tempPreciousMetals[metal] -= rowPreciousMetals[metal];
    });

    let rowRadioactive = {
      uranium: world.radioactive.uranium / (5 - i),
      thorium: world.radioactive.thorium / (5 - i),
      potassium: world.radioactive.potassium / (5 - i)
    };

    //iso meaning isotope
    Object.keys(rowRadioactive).forEach(iso => {
      tempRadioactive[iso] -= rowRadioactive[iso];
    });
    //End <------------------>

    for(let j = 0;j < world.size * 5;j++) {
      //Create the object for the current grid square
      let currentGridSquare = {
        dangerFactor: null,
        numberOfTrees: null,
        animalLife: null,
        soilFertility: null,
        ores: {
          copper: null,
          lead: null,
          nickle: null,
          tin: null,
          aluminum: null,
          zink: null,
          iron: null
        },
        preciousMetals: {
          gold: null,
          silver: null,
          platinum: null
        },
        radioactive: {
          uranium: null,
          thorium: null,
          potassium: null
        }
      };

      //Set the values to the leftover elements IF it is on the last iteration of each row
      if(j == world.size * 5 - 1) {
          currentGridSquare.numberOfTrees = Math.round(rowSize);

          currentGridSquare.animalLife = Math.round(rowAnimal);

          Object.keys(currentGridSquare.ores).forEach(ore => {
            currentGridSquare.ores[ore] = Math.round(rowOres[ore]);
          });

          Object.keys(currentGridSquare.preciousMetals).forEach(metal => {
            currentGridSquare.preciousMetals[metal] = Math.round(rowPreciousMetals[metal]);
          });

          Object.keys(currentGridSquare.radioactive).forEach(iso => {
            currentGridSquare.radioactive[iso] = Math.round(rowRadioactive[iso]);
          });
      } else {
        //Start: ~Equally provision all the resources <---------------->
        currentGridSquare.numberOfTrees = Math.round(rowSize / (world.size * 5 - j) * ((Math.floor(Math.random() * 15) + 85)/ 100));
        rowSize -= currentGridSquare.numberOfTrees;

        currentGridSquare.animalLife = Math.round(rowAnimal / (world.size * 5 - j) * ((Math.floor(Math.random() * 15) + 85)/ 100));

        Object.keys(currentGridSquare.ores).forEach(ore => {
          currentGridSquare.ores[ore] = Math.round(rowOres[ore] / (world.size * 5 - j) * ((Math.floor(Math.random() * 15) + 85)/ 100));
        });

        Object.keys(currentGridSquare.preciousMetals).forEach(metal => {
          currentGridSquare.preciousMetals[metal] = Math.round(rowPreciousMetals[metal] / (world.size * 5 - j) * ((Math.floor(Math.random() * 15) + 85)/ 100));
        });

        Object.keys(currentGridSquare.radioactive).forEach(iso => {
          currentGridSquare.radioactive[iso] = Math.round(rowRadioactive[iso] / (world.size * 5 - j) * ((Math.floor(Math.random() * 15) + 85)/ 100));
        });
      }
      //End <------------------->

      //Start: Set the soil fetility based on the average and set the danger level on a scale of 1 to 5 <----------------->
      currentGridSquare.soilFertility = world.averageSoilFertility + Math.round(Math.random() * 15) - Math.round(Math.random() * 15);
      if(currentGridSquare.soilFertility > 100) {
          currentGridSquare.soilFertility = 100;
      }

      currentGridSquare.dangerFactor = Math.ceil(Math.random() * 5);
      //End <------------------->

      //Add the current grid square to the world map
      world.grid[i].push(currentGridSquare);
    }
  }
  //End <----------------------->

  return world;
}

window.onload = () => {
    document.getElementById("data").innerHTML = JSON.stringify(generatePlanet());
};
