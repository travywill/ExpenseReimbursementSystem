let user = {};

window.onload = function() {
	checkifmanager();
}

function checkifmanager() {
	
	fetch("http://localhost:8082/ExpenseReimbursementSystem/session").then(function(response) {
		return response.json(); 
	}).then(function(data) {
		console.log(data);
		
		if(data.session === null) {
			window.location = "http://localhost:8082/ExpenseReimbursementSystem/login"
		} else {
			
			user = data;
			
			if(user.userID != 1) {
				window.location = "http://localhost:8082/ExpenseReimbursementSystem/login"
			}
			
		}
	})
}