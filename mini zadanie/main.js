$({ countNum: $('.percent').html() }).animate({ countNum: 2 }, {
    duration: 4000,
    easing: 'linear',
    step: function () {
    $('.percent').html(Math.floor(this.countNum) + "%");
},
complete: function () {
    $('.percent').html(this.countNum + "%");
}
});



$({ countNum: $('.thousand').html() }).animate({ countNum: 11 }, {
    duration: 4000,
    easing: 'linear',
    step: function () {
    $('.thousand').html(Math.floor(this.countNum) + "K");
},
complete: function () {
    $('.thousand').html(this.countNum + "K");
}
});

$({ countNum: $('.travel-percent').html() }).animate({ countNum: 5 }, {
    duration: 4000,
    easing: 'linear',
    step: function () {
    $('.travel-percent').html(Math.floor(this.countNum) + "%");
},
complete: function () {
    $('.percent').html(this.countNum + "%");
}
});

$({ countNum: $('.travel-number').html() }).animate({ countNum: 15 }, {
    duration: 4000,
    easing: 'linear',
    step: function () {
    $('.travel-number').html(Math.floor(this.countNum) + "K");
},
complete: function () {
    $('.travel-number').html(this.countNum + "K");
}
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
};


function checkCookies(){
	if(getCookie("swal2") == null)
		showAlert();

}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function showAlert(){
	Swal.fire({
        title: 'Test rekrutacyjny',
        text: "Mam nadzieje, udało się zadanie",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Zamknij'
      }).then((result) => {
        onButtonClick();
})
}

function onButtonClick(){
	setCookie("swal2", "123", 30);
}