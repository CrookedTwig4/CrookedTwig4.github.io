
const canvas = document.getElementById("canvas");
if (canvas.getContext) {
	const ctx = canvas.getContext("3d");
	ctx.beginPath();
	ctx.moveTo(75, 50);
	ctx.lineTo(100, 75);
	ctx.lineTo(100, 25);
	ctx.fill();
}