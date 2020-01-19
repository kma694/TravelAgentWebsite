
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
 
 
 function validateForm() {
  var fname = document.forms["myForm"]["fname"].value;
  if (fname == "") {
    alert("Forename must be filled out");
    return false;
  }
  var sname = document.forms["myForm"]["sname"].value;
  if (sname == "") {
    alert("Surname must be filled out");
    return false;
  }
  var email = document.forms["myForm"]["email"].value;
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  var pwd = document.forms["myForm"]["pwd"].value;
  if (pwd == "") {
    alert("Password must be filled out");
    return false;
  }
  var pwd2 = document.forms["myForm"]["pwd2"].value;
  if (pwd2 == "") {
    alert("Password confirmation must be filled out");
    return false;
  }
}

function validateLogin(){
	var username = document.getElementById("usernameIn").value;
	var pwd = document.getElementById("passwordIn").value;
	if (username == "FullStackMack" && pwd == "password123"){
		window.open (href="./yourAccount.html")
	}
	else {
		alert("Your username and/or password are/is incorrect")
 }
}


function destinationDrop() {
  document.getElementById("destinationDrop").classList.toggle("show");
}

function desinationFilterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("destinationDrop");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}





