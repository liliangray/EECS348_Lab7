function validate(){
	var pass1 = document.getElementById("pass1").value;
        var pass2 = document.getElementById("pass2").value;
        if (pass1.length < 8){
		alert("Password is too short");
        }
        else{
		for (let a = 0; a < pass1.length; a++){
			if (pass1.at(a) != pass2.at(a)){
				alert("Passwords do not match");
                                break;
                        }
                 alert("Yay! Passwords are a match!");
                 return false;
                }
        }       
}
