let requestArray = {};

window.onload = function() {
	viewPendingRequests();
}

function viewPendingRequests() {
	
	fetch("http://localhost:8082/ExpenseReimbursementSystem/managerviewpendingrequests").then(function(response) {
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
				let reason = requestArray[i].requestNote;
				let pendingRequests = document.createTextNode(`Pending request (RequestID: ${requestID}) for ${employee} (EmployeeID: ${employeeID}) - $${amount}`);
				
				li.appendChild(pendingRequests);
				document.getElementById("pendingrequestsforemployees").appendChild(li);
			}
			
		}
	})
}