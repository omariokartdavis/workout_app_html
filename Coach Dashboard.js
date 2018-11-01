//in order to add anything to a group of elements you must iterate over them 1 by 1 using a for loop.

//in order to add a transition to a disappearing element, you cannot set the display to none. you must change opacity or height/width 
//   dimension to 0. Transitions do not work on display: none

var group_names = document.getElementsByClassName("group_name");
var athlete_groups = document.getElementsByClassName("athlete_group");

function ChangeGroup() {
	var group = this.id;
	if (this.id == "all_groups") {
		for (var i = 0; i < athlete_groups.length; i++) {
			athlete_groups[i].style.display = 'block';
		}
	} else {
		for (var i = 0; i < athlete_groups.length; i++) {
			athlete_groups[i].style.display = 'none';
		};
		document.getElementById(group+"_athletes_id").style.display = 'block';
	}
}

for (var i = 0; i < group_names.length; i++) {
	group_names[i].addEventListener("click", ChangeGroup, false)
}

var dropdown = document.getElementsByClassName("dropdown_button");

function dropdownFunction() {
	this.classList.toggle("active");
	var dropdownContent = this.nextElementSibling;
	if (dropdownContent.style.height == "60%") {
		dropdownContent.style.height = "0";
	} else {
		dropdownContent.style.height = "60%";
	}
};

function openNav() {
	document.getElementById("side_nav_bar").style.width = "400px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	for (var i = 0; i < dropdown.length; i++) {
		dropdown[i].addEventListener("click", dropdownFunction, false) //this for loop has to be inside the openNav() function because it can't apply the on click event before the side nav has been opened. The buttons don't exist yet.
	}
}

function closeNav() {
	document.getElementById("side_nav_bar").style.width = "0";
	document.body.style.backgroundColor = "white";
}

document.getElementById("side_nav_open_button").addEventListener("click", openNav, false);
document.getElementById("side_nav_close_button").addEventListener("click", closeNav, false);




