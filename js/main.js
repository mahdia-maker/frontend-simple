$('.m-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    rtl: true,
    navText : "",
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.product-slider').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    rtl: true,
    navText : "",
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:5
        }
    }
})
$('.amazing-slider').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    rtl: true,
    navText : "",
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:5
        }
    }
})
$('.special-slider').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    rtl: true,
    navText : "",
    dots: true,
    dotsData:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.insta-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    rtl: true,
    navText : "",
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:6
        }
    }
})
$('.brand-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    rtl: true,
    navText : "",
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:6
        }
    }
})

/***********timer Amazing***********/
$(document).ready(function (){
    function countdownTimer() {
        var countdownElements = document.querySelectorAll('.box-timer');
        countdownElements.forEach(function (countdownElement) {
            var daysElements = countdownElement.querySelectorAll('.days-value');
            var hoursElements = countdownElement.querySelectorAll('.hours-value');
            var minutesElements = countdownElement.querySelectorAll('.minutes-value');
            var secondsElements = countdownElement.querySelectorAll('.seconds-value');
            var messageElement = countdownElement.querySelector('.timer-message');
            var messagesElement = countdownElement.querySelector('.massages-heddin');
            var targetYear = parseInt(countdownElement.dataset.targetYear);
            var targetMonth = parseInt(countdownElement.dataset.targetMonth) - 1;
            var targetDay = parseInt(countdownElement.dataset.targetDay);
            var targetHour = parseInt(countdownElement.dataset.targetHour);
            var targetMinute = parseInt(countdownElement.dataset.targetMinute);
            var targetSecond = parseInt(countdownElement.dataset.targetSecond);
            var targetDate = new Date(targetYear, targetMonth, targetDay, targetHour, targetMinute, targetSecond);

            function updateTimer() {
                var now = new Date().getTime();
                var timeRemaining = targetDate - now;
                var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
                for (var i = 0; i < daysElements.length; i++) {
                    daysElements[i].innerHTML = days;
                }
                for (var i = 0; i < hoursElements.length; i++) {
                    hoursElements[i].innerHTML = hours;
                }
                for (var i = 0; i < minutesElements.length; i++) {
                    minutesElements[i].innerHTML = minutes;
                }
                for (var i = 0; i < secondsElements.length; i++) {
                    secondsElements[i].innerHTML = seconds;
                }
                if (timeRemaining > 0) {
                    setTimeout(updateTimer, 1000);
                } else {
                    messagesElement.style.display = 'none';
                    /*messageElement.style.display = 'block';
                    var messageTextElement = messageElement.querySelector('.timer-message-text');
                    messageTextElement.innerHTML = 'تایمر به پایان رسیده است';*/
                }
            }

            updateTimer();
        });
    }
    countdownTimer();
});

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


    $(document).ready(function (){
        var modal_video = document.getElementById("modal_video");
        var btn_modal_video = document.getElementById("btn_modal_video");
        var close_video = document.getElementsByClassName("close_video")[0];
        btn_modal_video.onclick = function() {
            modal_video.style.display = "block";
        }
        close_video.onclick = function() {
            modal_video.style.display = "none";
        }
    })

// start modal-share
    $(document).ready(function (){
        var modal_share = document.getElementById("modal_share");
        var btn_modal_share = document.getElementById("btn_modal_share");
        var close_share = document.getElementsByClassName("close_share")[0];
        btn_modal_share.onclick = function() {
            modal_share.style.display = "block";
        }
        close_share.onclick = function() {
            modal_share.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal_video || event.target == modal_login || event.target == modal_share) {
                modal_video.style.display = "none";
                modal_login.style.display = "none";
                modal_share.style.display = "none";
            }
        }
    })
