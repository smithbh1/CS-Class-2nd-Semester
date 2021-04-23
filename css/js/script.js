let daynames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let month = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"]

let d= new Date(document.lastModified) ;
let dayName = daynames[d.getDay()] ;
let monthName = month[d.getMonth()] ;

let fulldate = dayName + ", " + monthName + " " + d.getDate() + " " + d.getFullYear() ;

let current_year = d.getFullYear() ;

document.getElementById("currentYear").textContent = current_year ;
document.getElementById("lastUpdate").textContent = fulldate ;


