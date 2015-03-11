var Person = function(firstName, lastName){
	this.firstName = ''; 
	this.lastName = '';
	
	if (firstName != undefined && firstName != null){
		this.firstName = firstName; 
	}
	
	if (lastName != undefined && lastName != null){
		this.lastName = lastName; 
	}
		
	this.getFullName = function(){
		return this.firstName + ' ' + this.lastName;
	}
}