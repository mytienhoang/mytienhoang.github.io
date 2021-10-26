const peoples = [];
const salaries = [];



function addSalary() {
    peoples[peoples.length] = prompt("Please Enter the Full Name of the Employee");
    salaries[salaries.length] = prompt("Please Enter " + people[people.length-1] + " Salary.");
    alert("Thanks for the info!");
}

function displayResults() {
    var highestSalary = 0;
    for (var i = 0; i < salaries.length; i++) {
        if (highestSalary < salaries[i] ) {
            highestSalary = salaries[i];
        }
    }
    var totalSalary = 0;
    for (var i =0; i < salaries.length; i++) {
        totalSalary = totalSalary + salaries[0];
    }
    var averageSalary = totalSalary/salaries.length;
    document.getElementById("results").innerHTML = "<h2> Results <h2> <p> Average Salary is "+ totalSalary + ". </p> <p> Highest Salary is " + highestSalary;

}



