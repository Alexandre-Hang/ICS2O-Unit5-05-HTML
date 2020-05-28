// JavaScript File
var age;
var day;
function remindMe () {
  age = document.getElementById("age").value;
  day = document.getElementById("day").value;
  if (day == "Saturday" || day == "Sunday")
  {
    alert ("Time to relax for the weekend!");
  }
  else if ((day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") && (age <= 17 && age >= 4))
  {
    alert ("Time for school!");
  }
  else if (age >= 18)
  {
    alert  ("Time to go to work!");
  }
}