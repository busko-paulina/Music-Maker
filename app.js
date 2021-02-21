window.addEventListener("load", () => {
	const sounds = document.querySelectorAll(".sound");
	const pads = document.querySelectorAll(".pads div");
	const visual = document.querySelector(".visual");
	const colors = [
		"#ffdcc2",
		"#ffc2c2",
		"#f9c2ff",
		"#c7c2ff",
		"#c2dfff",
		"#c2f1ff"
	];

	//sound

	pads.forEach((pad, index) => {
		pad.addEventListener("click", function() {
			sounds[index].currentTime = 0;
			sounds[index].play();

			createDot(index);
		});
	});

	//dots function
	const createDot = (index) => {
		const dot = document.createElement("div");
		visual.appendChild(dot);
		dot.style.backgroundColor = colors[index];
		dot.style.animation = "jump 1s ease";
		dot.addEventListener("animationend", function(){
			visual.removeChild(this);
		});
	};
});