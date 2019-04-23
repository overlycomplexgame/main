window.onload = () => {
    let planetData;
    
    document.getElementById("loadData").addEventListener("submit", e => {
        e.preventDefault();
        
        planetData = document.getElementById("dataFile").value;
        document.getElementById("data").innerHTML = planetData;
        
        //Hide both the genUniverse button and the load file butotn
        document.getElementById("loadData").style.display = "none";
        document.getElementById("genUniverse").style.display = "none";
    });
                                                    
    document.getElementById("genUniverse").addEventListener("click", () => {
        planetData = generatePlanet();
        document.getElementById("data").innerHTML = planetData;
    });
};
