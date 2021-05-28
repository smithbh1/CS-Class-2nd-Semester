//let tempF = parseInt(document.querySelector("#tempF"));
//let speed = parseInt(document.querySelector("#speed"));
let tempF = 45;
let speed = 5;
function windChill(x, y){

    formula = 35.74 + (0.6215 * x) - (35.75 * Math.pow(y, 0.16)) + 0.4275 * x * (Math.pow(y, 0.16));
    return formula;
        
}

if (tempF <= 50 && speed > 3){

    windChill(tempF, speed)

    document.querySelector("windChill").textContent = windChill(tempF, speed);
}
