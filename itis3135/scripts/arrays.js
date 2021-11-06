const peoples = ["Bob Sheryll", "Nate Walkins", "Jonathan Nguyen", "Harry Potter", "Carl Bourne","Matt Teal"];
const salaries = [0, 0, 0, 0, 0, 0];


var listOfPeoples = "";
for (var i = 0; i < salaries.length; i++ ) {
        var person = "<option> " + peoples[i] + "</option>";
        listOfPeoples = listOfPeoples + person;
}
document.getElementById("pickOneEmployee") = listOfPeoples;




function addSalary() {
    var chosenPerson = document.getElementById("pickOneEmployee").value;
    var salary = document.getElementById("theSalary").value;
    salary = parseInt(salary);

    if (salary == NaN) {
        salary = 0;
    }

    for (var i = 0; i < peoples.length; i++) {
        if (peoples[i] == chosenPerson) {
            salaries[i] = salary;
            
        }
    }
    alert(chosenPerson + "'s Salary is now " + salary);

    /*peoples[peoples.length] = prompt("Please Enter the Full Name of the Employee");
    salaries[salaries.length] = prompt("Please Enter " + peoples[peoples.length-1] + "'s Salary.");
    alert("Thanks for the info!"); */
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
        totalSalary = totalSalary + salaries[i];
    }
    var averageSalary = totalSalary/(salaries.length);
    document.getElementById("results").innerHTML = "<h2> Results <h2> <p> Average Salary is "+ averageSalary + ". </p> <p> Highest Salary is " + highestSalary + "! </p>";

}

function listOfEmployees() {
    var tableStatement = "<table>  <thead>  <tr>  <th>Employee Name</th>  <th>Salary per Year</th>  </tr>  </thead>  <tbody>";
    for (var i = 0; i < salaries.length; i++ ) {
        var employeeStatement = "<tr> <td>" + peoples[i] + "</td> <td> " + salaries[i] + "</td> </tr>";
        tableStatement = tableStatement + employeeStatement;
    }
    tableStatement = tableStatement + "</tbody> </table>";
    document.getElementById("tableForResults").innerHTML = tableStatement;
    
}



