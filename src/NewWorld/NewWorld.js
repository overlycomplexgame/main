window.onload = () => {
    let planetData;
    
    document.getElementById("loadData").addEventListener("submit", e => {
        e.preventDefault();
        document.getElementById("data").innerHTML = document.getElementById("dataFile").value;
    }
                                                    
    document.getElementById("genUniverse").addEventListener("click", () => {
        planetData = generatePlanet();
        document.getElementById("data").innerHTML = planetData;
    });
};
