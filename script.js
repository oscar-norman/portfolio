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

$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var name    = document.getElementById('inputName')
    var email   = document.getElementById('inputEmail')
    var message = document.getElementById('inputMessage')

    if (!name.value || !email.value || !message.value) {
      alertify.error("Please check your entries");
      return false;
    } else {
      $.ajax({
        method: 'POST',
        url: '//formspree.io/oscar-norman@hotmail.com',
        data: $('#contact-form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
      alertify.success("Message sent");
    }
  });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
