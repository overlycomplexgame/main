window.onload = () => {
    let planetData;
    
    document.getElementById("loadData").addEventListener("submit", e => {
        e.preventDefault();
        console.log("Still In Testing");
    }
                                                    
    document.getElementById("genUniverse").addEventListener("click", () => {
        planetData = generatePlanet();
        document.getElementById("data").innerHTML = planetData;
    });
};
