
function changeStartImage(src) {
	document.getElementById("start-image").setAttribute("src", src);
	document.getElementById("start-image").scrollIntoView({ block: 'end',  behavior: 'smooth' });
}

function loadImages() {
	for (var i = 1; i <= 37; i++) {
		var html = '<div class="gallery-image"><img src="bilder/bild_'+i+'.jpg" id="bild_'+i+'" onclick="changeStartImage(this.src)"></div>'
		document.getElementById("gallery-wrapper").innerHTML += html;
	}
}
