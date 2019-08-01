let userArray = {};

window.onload = function() {
	listEmployeesAndManagers();
}

function listEmployeesAndManagers() {
	
	fetch("http://localhost:8082/ExpenseReimbursementSystem//viewallemployeesandmanagers").then(function(response) {
		return response.json(); 
	}).then(function(data) {
		console.log(data);
		
		if(data.session === null) {
			window.location = "http://localhost:8082/ExpenseReimbursementSystem/login"
		} else {
			userArray = data;
			
			for (i = 0; i < userArray.length; i++) {
				let li = document.createElement("li");
				let employee = `Employee: ${userArray[i].firstName} ${userArray[i].lastName}`;
				let manager = `Manager: ${userArray[i].managerFirstName} ${userArray[i].managerLastName}`
				if (userArray[i].managerFirstName == null) {
					manager = "Manager: NA";
				}
				let employeeAndManager = document.createTextNode(`${employee}, ${manager}`);
				
				li.appendChild(employeeAndManager);
				document.getElementById("employeesandmanagers").appendChild(li);
			}
			
		}
	})
}