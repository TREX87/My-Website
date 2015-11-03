function popUpMenu()
{
	var menu = document.getElementById("inner");
	menu.setAttribute("style", "display: block;");
	var myPersonalInfo = document.getElementById("fourth");
	myPersonalInfo.setAttribute("style", "color: white; background-color: #303030; font-weight: bold;");
}

function removesMenu()
{
	var menu = document.getElementById("inner");
	menu.setAttribute("style", "display: none;");
	var myPersonalInfo = document.getElementById("fourth");
	myPersonalInfo.setAttribute("style", "text-decoration: none; color: #30F0F0;");
}