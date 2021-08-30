var navbar1 = document.querySelector(".navbar");
window.onscroll = function () {

    navbar1.classList.remove('active');

    if (window.scrollY > 600) {
        navbar1.classList.add('active');
    } else {
        navbar1.classList.remove('active');
    }

}







var ready1 = document.getElementById("preloader");
var loading = document.querySelector(".loader");
window.addEventListener('DOMContentLoaded', ready);
function ready() {
    setTimeout(function () {
        ready1.classList.add("complete");
        loading.parentElement.removeChild(loading)
    }, 3000);
}




const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {

    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function (btn) {

            btn.classList.remove("active1");

        });
        e.target.classList.add("active1");

        articles.forEach(function (article) {
            article.classList.remove("active1");

        });
        const element = document.getElementById(id);
        element.classList.add("active1");
    }
});

function valdi() {
    var name1 = document.getElementById("name").value
    var error = document.getElementById("error")
    var ero = document.getElementById("ero").value
    var email = document.getElementById("ema").value
    var text = document.getElementById("text").value
    if(name1=="")
    {
        error.innerHTML="Enter Name"
    }
    else if (name1.length < 5)
    {
        error.innerHTML="Enter Name more than 5 letters"
    }
    else if (ero=="" || isNaN(ero))
    {
        error.innerHTML="Enter Phone Number"
    }
    else if(ero.length!=11)
    {
        error.innerHTML="Enter Phone Number equal 11"
    }
    else if(email=="")
    {
        error.innerHTML="Enter E-mail"
    }
    else if (email.indexOf("@")==-1)
    {
        error.innerHTML="Enter Valid E-mail"
    }
    else if (text=="")
    {
        error.innerHTML="Enter Message"
    }
    else if(text.length < 15)
    {
        error.innerHTML="Enter Message More than 15 letters"  
    }
    else {
        alert("Message has been sent successfully")
    }
    return false
}




fetch('data.json').then(function(response){
    return response.json();
}).then(function (obj){
    console.log(obj);
    for(var i = 0; i<obj.hotel.length; i++){
        document.getElementById("demo").innerHTML+=
        `<div class="col-md-4 col-sm-12">
        <div class ="far"> <img src="${obj.hotel[i].img}" alt=""></div>
       
        <h3>${obj.hotel[i].name}</h3>
        <p>${obj.hotel[i].press}</p>
        
    </div>`
    }
    
}).catch(function(error){
console.log("something went wrong");
console.error(error);
})










/***************************************************************** */
AOS.init({
    once: true
})



$(document).ready(function () {
    // Add smooth scrolling to all links
    $("nav-link").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});



window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar-sec").style.top = "0";
    } else {
        document.getElementById("navbar-sec").style.top = "-50px";
    }
}

$('#ChangeToggle').click(function () {
    if ($('#ChangeToggle span').hasClass('ToggleButton')) {
        $('#ChangeToggle').innerHTML(`<span aria-hidden="true">&times;</span>`);
    }
    else {
        $('#ChangeToggle').innerHTML(`<span class="navbar-toggler-icon"></span>`);
    }
});
/******************************************** */









