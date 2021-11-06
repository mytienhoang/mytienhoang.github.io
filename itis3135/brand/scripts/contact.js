
function displayResults() {
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var reasonOfContact = document.getElementById("reasonOfContact").value;
    var explanation = document.getElementById("explanation").value;

    var resultStatement= "<h2> Thanks for entering your info. This is what you have submitted below </h2>";
    resultStatement = resultStatement + "<p> Name: " + user + "</p>";
    resultStatement = resultStatement + "<p> Email: " + email + "</p>";
    resultStatement = resultStatement + "<p> Reason of Contact: " + reasonOfContact + "</p>";
    resultStatement = resultStatement + "<p> " + explanation + "</p>";

    

    
    document.getElementById("results").innerHTML = resultStatement;
    
}
