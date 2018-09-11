document.getElementById("done_text_change").style.display = 'none';
document.getElementById("done_text_change").addEventListener("click", stopupdatemesoName);
document.getElementById("done_text_change").addEventListener("click", hidedonetextupdateBtn);
document.getElementById("meso_text_change").addEventListener("click", updateMesoName);
document.getElementById("meso_text_change").addEventListener("click", showdonetextupdateBtn);

document.getElementById("done_resize_meso").style.display = 'none';
document.getElementById("resize_mesocycle").addEventListener("click", resizemesocycles);
document.getElementById("done_resize_meso").addEventListener("click", stopresizemeso);
document.getElementById("done_resize_meso").addEventListener("click", hidedoneresizemesoBtn);
document.getElementById("resize_mesocycle").addEventListener("click", showdoneresizemesoBtn);

function updateName() {
	var name = prompt('Enter a new name');
	this.textContent = name;
}

function updateMesoName() {
	var mesocontent = document.querySelectorAll('div.mesocycle');

	for (var i = 0; i < mesocontent.length ; i++) {
		mesocontent[i].addEventListener('click', updateName);
	}
}

function showdonetextupdateBtn() {
	document.getElementById("done_text_change").style.display = 'block';
}

function hidedonetextupdateBtn() {
	document.getElementById("done_text_change").style.display = 'none';
}

function stopupdatemesoName() {
	var mesocontent = document.querySelectorAll('div.mesocycle');

	for (var i = 0; i < mesocontent.length ; i++) {
		mesocontent[i].removeEventListener('click', updateName);
	}
}

function showdoneresizemesoBtn() {
	document.getElementById("done_resize_meso").style.display = 'block';
}

function hidedoneresizemesoBtn() {
	document.getElementById("done_resize_meso").style.display = 'none';
}

function resizemesocycles() {
	var mesocontent = document.querySelectorAll('div.mesocycle');

	for (var i = 0; i < mesocontent.length ; i++) {
		mesocontent[i].style.resize = 'horizontal';
	}
}

function stopresizemeso() {
	var mesocontent = document.querySelectorAll('div.mesocycle');

	for (var i = 0; i < mesocontent.length ; i++) {
		mesocontent[i].style.resize = 'none';
	}
}
