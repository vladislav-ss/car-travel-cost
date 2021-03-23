let distance;
let fuelEfficiency;
let fuelPrice;
let neededFuel;
let cost;
const calculateButton = document.getElementById("calculate");
const outputText = document.getElementById("output");

calculateButton.addEventListener('click', () => {
    distance = document.getElementById("distance").value;
    fuelEfficiency = document.getElementById("fuel-efficiency").value;
    fuelPrice = document.getElementById("fuel-price").value;
    getResult(distance, fuelEfficiency, fuelPrice);
    });

function getResult(di, fe, fp) {
    neededFuel = di * fe / 100;
    cost = neededFuel * fp;
    outputText.textContent = `This trip will require ${neededFuel} liters, which amounts to a total cost of ${cost}.`;
}
