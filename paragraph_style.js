function alert_paragraph_color(){
	var bw = document.getElementById("border_width").value;
        var bc_r = document.getElementById("border_R").value;
        var bc_g = document.getElementById("border_G").value;
        var bc_b = document.getElementById("border_B").value;
	var bg_r = document.getElementById("bg_R").value;
	var bg_g = document.getElementById("bg_G").value;
	var bg_b = document.getElementById("bg_B").value;
        document.getElementById("paragraph").style.borderWidth = bw+"px";;
        document.getElementById("paragraph").style.borderColor = "rgb("+bc_r+","+bc_g+","+bc_b+")";
	document.getElementById("paragraph").style.backgroundColor = "rgb("+bg_r+","+bg_g+","+bg_b+")";
}

