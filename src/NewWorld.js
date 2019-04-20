window.onload = () => {
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
  }
};

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

document.getElementById("data").innerHTML = JSON.stringify(world);
};
