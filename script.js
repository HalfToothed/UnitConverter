
const convertBtn = document.getElementById("btn");
let length = document.getElementById("meter-feet");
let volume = document.getElementById("liter-gal");
let mass = document.getElementById("kg-pounds");
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function Convert(){
   let inputValue = document.getElementById("input").value;
   length.textContent = inputValue + " meters = " + Math.floor(inputValue*3.281) + " feet" + " | " + inputValue+" feet = " + Math.floor(inputValue*1/3.281) + " meters";
   volume.textContent = inputValue + " liters = " + Math.floor(inputValue*0.264) + " gallon" + " | " + inputValue+" gallon = " + Math.floor(inputValue*1/0.264) + " liters";
   mass.textContent = inputValue + " kilograms = " + Math.floor(inputValue*2.204) + " pounds" + " | " + inputValue+" pounds = " + Math.floor(inputValue*1/2.204) + " kilograms";
}

convertBtn.addEventListener("click", Convert)