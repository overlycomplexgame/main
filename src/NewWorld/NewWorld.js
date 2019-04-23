window.onload = () => {
    let planetData;
    
    document.getElementById("loadData").addEventListener("submit", e => {
        e.preventDefault();
        
        planetData = document.getElementById("dataFile").value;
        document.getElementById("data").innerHTML = planetData;
    }
                                                    
    document.getElementById("genUniverse").addEventListener("click", () => {
        planetData = generatePlanet();
        document.getElementById("data").innerHTML = planetData;
    });
};
