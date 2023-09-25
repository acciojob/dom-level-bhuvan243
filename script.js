//your JS code here. If required.
const levelElement = document.getElementById("level");
let level = 1;
while (true) {
	if (levelElement === "BODY"){
		level++;
		break;
	}
	levelElement = levelElement.parentNode;
	level++;
}

alert(`The level of the element is: ${level}`);
