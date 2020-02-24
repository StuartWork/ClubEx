window.onload = init;

function init() {
	
	//Event for submit button
	var formsubmit = document.getElementById("submit");
	if (formsubmit) {
		formsubmit.onclick = checkForm;
	}
	//Event for reset button
	var formreset = document.getElementById("reset");
	if (formreset) {
		formreset.onclick = formClear;
	}
}

function checkForm() {
	
	// NAME: required at least three letters
	var name= document.getElementById("name").value;
	var name_msg = document.getElementById("name_msg");
	var valid = true;
	
	if (name.length < 3) {
		name_msg.innerHTML = "Name should be at least 3 letters in length.";
		name_msg.className = "error";
		valid = false;
	}else {
		name_msg.innerHTML = "";
		name_msg.className = "";
	}
	
	//FAMILTNAME: Required, at least three letters long
	var topic = document.getElementById("topic").value;
	var topic_msg = document.getElementById("topic_msg");
	
	if (topic.length < 3) {
		topic_msg.innerHTML = "Topic should be at least 3 letters in length.";
		topic_msg.className = "error";
		valid = false;
	}else{
		topic_msg.innerHTML = "";
		topic_msg.className = "";
	}
	
	//EMAIL: Not required, but if not blank, then must be valid email address
	var email = document.getElementById("email").value;
	var email_msg = document.getElementById("email_msg");
	
	var emailRegExp = /^(\w+@[a-z\d]+?([a-z-\d_\.]*?)\.[a-z]{2,6})$/i;
	
	if (email != "" && !emailRegExp.test(email)) {
		email_msg.innerHTML = "Must be a vaild email address e.g. abc123@mail.com, or left blank.";
		email_msg.className = "error";
		valid = false;
	}else {
		email_msg.innerHTML = "";
		email_msg.className = "";
	}
	
	//PHONE: Not required, but if not blank, then must be valid phone number
	//PHONE & EMAIL: one is required, but not both
	var phone = document.getElementById("phone").value;
	var phone_msg = document.getElementById("phone_msg");
	
	var phoneRegExp = /^\(\d{3}\)\d{7,8}$/i;

	if (phone != "" && !phoneRegExp.test(phone)) {
		phone_msg.innerHTML = "Must be a vaild phone number e.g. (123)1234567, or left blank.";
		phone_msg.className = "error";
		valid = false;
	}else if(phone == "" && email == ""){
		email_msg.innerHTML = "Must have an email address if no phone number.";
		email_msg.className = "error";
		phone_msg.innerHTML = "Must have a phone number if no email address.";
		phone_msg.className = "error";
		valid = false;
	}else {
		phone_msg.innerHTML = "";
		phone_msg.className = "";
	}
	
	

	
	//MESSAGE: Required, at least three letters long
	var message = document.getElementById("message").value;
	var message_msg = document.getElementById("message_msg");
	
	if (message.length < 3) {
		message_msg.innerHTML = "Please put a message in the box.";
		message_msg.className = "error";
		valid = false;
	}else{
		message_msg.innerHTML = "";
		message_msg.className = "";
	}

	return valid;
}

function formClear(){
	var name_msg = document.getElementById("name_msg");
	if (name_msg.innerHTML = "Name should be at least 3 letters in length"){
		name_msg.innerHTML = "";
		name_msg.className = "";
	}
	
	var topic_msg = document.getElementById("topic_msg");
	if (topic_msg.innerHTML = "Topic should be at least 3 letters in length"){
		topic_msg.innerHTML = "";
		topic_msg.className = "";
	}

	var email_msg = document.getElementById("email_msg");
	if (email_msg.innerHTML = "Must have an email address if no phone number."){
		email_msg.innerHTML = "";
		email_msg.className = "";
	}
	
	var phone_msg = document.getElementById("phone_msg");
	if (phone_msg.innerHTML = "Must have a phone number if no email address."){
		phone_msg.innerHTML = "";
		phone_msg.className = "";
	}
	
	var message_msg = document.getElementById("message_msg");
	if (message_msg.innerHTML = "Please but a message in the box."){
		message_msg.innerHTML = "";
		message_msg.className = "";
	}
}