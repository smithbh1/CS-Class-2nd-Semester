const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("currentdate").textContent = fulldate;

const hambutton = document.querySelector(".ham_menu");
const mainnav = document.querySelector(".navigation")

hambutton.addEventListener("click", () => 
{mainnav.classList.toggle("responsive")}, false);

if (d.getDay() == 5){
    document.querySelector(".banner_message").style.display="block";
}

var header = document.querySelector(".navigation");
var links = header.getElementsByClassName("link");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) { 
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
      });
    }
//let tempF = parseInt(document.querySelector("#tempF"));
//let speed = parseInt(document.querySelector("#speed"));
let tempF = 45;
let speed = 5;
function windChill(x, y){

    formula = 35.74 + (0.6215 * x) - (35.75 * Math.pow(y, 0.16)) + 0.4275 * x * (Math.pow(y, 0.16));
    return formula;
        
}

if (tempF <= 50 && speed > 3){

    document.querySelector("windChill").textContent = windChill(tempF, speed);
}
