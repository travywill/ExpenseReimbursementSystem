let requestArray = {};

window.onload = function() {
	viewResolvedRequestsForEmployees();
}

function viewResolvedRequestsForEmployees() {
	
	fetch("http://localhost:8082/ExpenseReimbursementSystem/managerviewresolvedrequestsforemployees").then(function(response) {
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
				let manager = `${requestArray[i].managerFirstName} ${requestArray[i].managerLastName}`;
				let managerID = requestArray[i].managerID;
				let employeeRequests = document.createTextNode(`RequestID: (${requestID}) for ${employee} (EmployeeID: ${employeeID}) - $${amount} - Status = ${requestStatusType} - Resolved by Manager ${manager} (ManagerID = ${managerID})`);
				
				
				
				li.appendChild(employeeRequests);
				document.getElementById("resolvedrequestsforemployees").appendChild(li);
			}
			
		}
	})
}