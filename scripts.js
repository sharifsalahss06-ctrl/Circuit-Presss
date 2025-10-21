// Menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle("show");
});

// Dropdown hover
const listItems = document.querySelectorAll(".nav-links li");

listItems.forEach(function(li){
    li.addEventListener('mouseenter', function(){
        const dd = li.querySelector('.dropdown');
        if(dd) dd.style.display = "block";
    });
    li.addEventListener("mouseleave", function(){
        const dd = li.querySelector('.dropdown');
        if(dd) dd.style.display='none';
    });
});

// Scroll-to-top button
const topBtn = document.getElementById('topBtn');

window.addEventListener("scroll", function(){
    if(window.scrollY > 300){
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display="none";
    }
});

topBtn.addEventListener('click', function(){
    window.scrollTo({top:0, behavior:'smooth'});
});

// Reviews
var reviews = [
    {text: "Circuit Press makes keeping up with tech easy and interesting, giving readers the stories and insights they actually care about.", author: "Alex"},
    {text: "The tutorials are short — nice.", author: "Maya (Freshman)"},
    {text: "Used one of the coding posts for my assignment, thanks!", author:"Jordan"}
];

var carouselInner = document.getElementById("carouselInner");

function renderReviews(){
    carouselInner.innerHTML = '';
    for(var i=0; i<reviews.length; i++){
        var r = reviews[i];
        var div = document.createElement('div');
        div.className = "carousel-item" + (i===0 ? " active" : '');
        div.innerHTML = '<div class="review-card mx-auto"><p>"' + r.text + '" — ' + r.author + '</p></div>';
        carouselInner.appendChild(div);
    }
}

renderReviews();

document.getElementById('addReviewBtn').addEventListener('click', function(){
    var text = prompt("Enter your comment:");
    if(text && text.trim() !== ''){
        reviews.unshift({text: text.trim(), author:'Visitor'});
        renderReviews();
    }
});

// Dark/Light Mode
var themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function(){
    var root = document.documentElement;
    var bg = getComputedStyle(root).getPropertyValue('--bg-color').trim();
    if(bg === '#102030'){
        // Light mode
        root.style.setProperty('--bg-color','#f5f5f5');
        root.style.setProperty('--text-color','#111827');
        root.style.setProperty('--primary-color','#0b6cd4');
        root.style.setProperty('--secondary-color','#1e90ff');
        root.style.setProperty('--card-bg','#ffffff');
        root.style.setProperty('--card-border','#0b6cd4');
        root.style.setProperty('--banner-bg','linear-gradient(135deg, #f0f0f0, #d0d0d0)');
    } else {
        // Dark mode
        root.style.setProperty('--bg-color','#102030');
        root.style.setProperty('--text-color','#eaeaea');
        root.style.setProperty('--primary-color','#1e90ff');
        root.style.setProperty('--secondary-color','#5ad7c0');
        root.style.setProperty('--card-bg','#111827');
        root.style.setProperty('--card-border','#5ad7c0');
        root.style.setProperty('--banner-bg','linear-gradient(135deg, #0b0b0b, #102030)');
    }
});
