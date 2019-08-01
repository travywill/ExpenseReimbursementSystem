let requestArray = {};

window.onload = function() {
	listAllManagedEmployeeRequests();
}

function listAllManagedEmployeeRequests() {
	
	fetch("http://localhost:8082/ExpenseReimbursementSystem//viewmanagedemployeerequests").then(function(response) {
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
				let employeeRequests = document.createTextNode(`RequestID: ${requestID}) for ${employee} (EmployeeID: ${employeeID}) - $${amount} - Status = ${requestStatusType}`);
				
				li.appendChild(employeeRequests);
				document.getElementById("allmanagedemployeerequests").appendChild(li);
			}
			
		}
	})
}