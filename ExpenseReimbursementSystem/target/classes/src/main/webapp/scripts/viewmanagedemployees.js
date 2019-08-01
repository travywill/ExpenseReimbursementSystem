let userArray = {};

window.onload = function() {
	listEmployeesAndManagers();
}

function listEmployeesAndManagers() {
	
	fetch("http://localhost:8082/ExpenseReimbursementSystem//viewmanagedemployees").then(function(response) {
		return response.json(); 
	}).then(function(data) {
		console.log(data);
		
		if(data.session === null) {
			window.location = "http://localhost:8082/ExpenseReimbursementSystem/login"
		} else {
			userArray = data;
			
			for (i = 0; i < userArray.length; i++) {
				let li = document.createElement("li");
				let employeeID = userArray[i].userID;
				let employee = `Employee: ${userArray[i].firstName} ${userArray[i].lastName}`;
				let managedEmployee = document.createTextNode(`${employee} (UserID: ${employeeID})`);
				
				li.appendChild(managedEmployee);
				document.getElementById("allmanagedemployees").appendChild(li);
			}
			
		}
	})
}