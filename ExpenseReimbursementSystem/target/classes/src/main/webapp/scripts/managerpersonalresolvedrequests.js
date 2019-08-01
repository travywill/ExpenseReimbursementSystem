let requestArray = {};

window.onload = function() {
	listPersonalPendingRequests();
}

function listPersonalPendingRequests() {
	
	fetch("http://localhost:8082/ExpenseReimbursementSystem//managerresolvedpendingrequests").then(function(response) {
		return response.json(); 
	}).then(function(data) {
		console.log(data);
		
		if(data.session === null) {
			window.location = "http://localhost:8082/ExpenseReimbursementSystem/login"
		} else {
			requestArray = data;
			
			for (i = 0; i < requestArray.length; i++) {
				let li = document.createElement("li");
				let employee = `${requestArray[i].requesterFirstName} ${requestArray[i].requesterLastName}`;
				let employeeID = requestArray[i].userID;
				let amount = requestArray[i].amount;
				let requestID = requestArray[i].requestID;
				let requestStatusType = requestArray[i].requestStatusType;
				let personalResolvedRequests = document.createTextNode(`RequestID: ${requestID} for ${employee} (EmployeeID: ${employeeID}) - $${amount} - Status: ${requestStatusType}`);
				
				
				li.appendChild(personalResolvedRequests);
				document.getElementById("managerpersonalresolvedrequests").appendChild(li);
			}
			
		}
	})
}