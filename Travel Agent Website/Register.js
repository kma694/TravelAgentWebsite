function Validate(){ 
    var firstName = document.forms["myForm"]["fname"].value;
	if (firstname == "") {
		document.getElementById("fname").style.border = "1px solid red";
		document.getElementById("fname_error").innerHTML = "First name is required";
		return false;
	}
	var surname = document.forms["myForm"]["sname"].value;
	if (surname == "") {
		document.getElementById("sname").style.border = "1px solid red";
		document.getElementById("sname_error").innerHTML = "Surname is required";
		return false;
	}
	var email = document.forms["myForm"]["email"].value;
	if (email == "") {
		document.getElementById("email").style.border = "1px solid red";
		document.getElementById("email_error").innerHTML = "Email is required";
		return false;
	}
	var password1 = document.forms["myForm"]["pwd"].value;
	if (password1.value == "") {
		document.getElementById("password1").style.border = "1px solid red";
		document.getElementById("pwd_error").innerHTML = "Password is required";
		return false;
	}
	var password2 = document.forms["myForm"]["pwd2"].value;
	if (password2.value == "") {
		document.getElementById("password2").style.border = "1px solid red";
		document.getElementById("pwd2_error").innerHTML = "Password confirmation is required";
		return false;
	}
}
