const pages = document.querySelectorAll(".page");
const home = document.querySelector(".home");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");

var github = document.querySelector('.link-github');
var bytechGH = document.querySelector('.link-bytech-github');
var bytechV = document.querySelector('.link-bytech-vercel');
var wildeyeaiGH = document.querySelector('.link-wildeyeai-github');
var yukaiGH = document.querySelector('.link-yukai-github');
var jamsterGH1 = document.querySelector('.link-jamster-github1');
var jamsterGH2 = document.querySelector('.link-jamster-github2');
var jamsterV = document.querySelector('.link-jamster-vercel');

var speechTime = 5000;
var message = "Hello! This is my portfolio.";

var visitedProjects, hoveredIcon = false;

// Page scroll

slide = (direction) => {
    let it_go;
    if (direction == "0") {
        it_go = 0;
        home.classList.add("active");
        projects.classList.remove("active");
        contact.classList.remove("active");
    } else if (direction == "1") {
        it_go = 100;
        home.classList.remove("active");
        projects.classList.add("active");
        contact.classList.remove("active");

        speechTime = 3000;
        message = "Here's a list of my projects!";
        visitedProjects = true;
    } else if (direction == "2") {
        it_go = 200;
        home.classList.remove("active");
        projects.classList.remove("active");
        contact.classList.add("active");

        speechTime = 3000;
        message = "Here's how you can contact me!";
    }
    pages.forEach(pages => (pages.style.transform = `translateX(${-it_go}%)`));
}

// Circle speaking

setInterval(function() {
    if (speechTime > 0){
        document.querySelector('.speech').innerHTML = message;
    } else {
        document.querySelector('.speech').innerHTML = "";
    }

    if (speechTime > 500) {
        document.querySelector('.speech').style.opacity = '1';
    } else if (speechTime < 0) {
        document.querySelector('.speech').style.opacity = '0';
    } else {
        document.querySelector('.speech').style.opacity =  (speechTime / 500);
    }

    if (speechTime > -15000) {
        speechTime -= 20;
    }
}, 20);

setInterval(function () {
    if (github.matches(':hover')) {
        speechTime = 2000;
        message = "This is the link to my GitHub!";
        hoveredIcon = true;
    } else if (bytechGH.matches(':hover')) {
        speechTime = 2000;
        message = "This is the ByTech GitHub repository!";
        hoveredIcon = true;
    } else if (bytechV.matches(':hover')) {
        speechTime = 2000;
        message = "This is the Vercel deployment of ByTech!";
        hoveredIcon = true;
    } else if (wildeyeaiGH.matches(':hover')) {
        speechTime = 2000;
        message = "This is the WildEyeAI GitHub repository!";
        hoveredIcon = true;
    } else if (yukaiGH.matches(':hover')) {
        speechTime = 2000;
        message = "This is the Yukai GitHub repository!";
        hoveredIcon = true;
    } else if (jamsterGH1.matches(':hover')) {
        speechTime = 2000;
        message = "This is the Jamster Extension GitHub repository!";
        hoveredIcon = true;
    } else if (jamsterGH2.matches(':hover')) {
        speechTime = 2000;
        message = "This is the Jamster React App GitHub repository!";
        hoveredIcon = true;
    } else if (jamsterV.matches(':hover')) {
        speechTime = 2000;
        message = "This is the Vercel deployment of Jamster!";
        hoveredIcon = true;
    }
}, 20);

setInterval(function() {
    if (speechTime == -15000) {
        var rand;
        rand = Math.floor(Math.random() * 2);

        if (rand == 0 && !visitedProjects) {
            speechTime = 3000;
            message = "Why not check out my projects?";
        } else if (rand == 1 && !hoveredIcon) {
            speechTime = 3000;
            message = "Some icons are clickable links!";
        }
    }
}, 100);

// Mouse circle

jQuery(document).ready(function() {

    var mouseX = -200, mouseY = 0;
    var smouseX = -200, smouseY = 0;
    var xp = -200, yp = 0;
    var sxp = -200, syp = 0;

    setInterval(function() {
        if(window.innerHeight > window.innerWidth){
            mouseX = -200;
            mouseY = 0;
            smouseX = -200;
            smouseY = 0;
        } else {
            $(document).mousemove(function (e) {
                if (e.pageX < window.innerWidth / 2) {
                    if (mouseX != e.pageX - 175) {
                        mouseX = e.pageX - 175;
                        smouseX = e.pageX - 200;
                    }
                } else {
                    if (mouseX != e.pageX + 75) {
                        mouseX = e.pageX + 75;
                        smouseX = e.pageX - 50;
                    }
                }

                if (e.pageY < window.innerHeight / 5) {
                    if (mouseY != e.pageY + 50) {
                        mouseY = e.pageY + 50;
                        smouseY = e.pageY + 150;
                    }
                } else {
                    if (mouseY != e.pageY - 100) {
                        mouseY = e.pageY - 100;
                        smouseY = e.pageY - 125;
                    }
                }
            });
        }
    }, 20);

    setInterval(function () {
        if(window.innerHeight > window.innerWidth) {
            xp = -200;
            yp = 0;
            sxp = -200;
            syp = 0;
            $("#circle").css({left: '0px', top: '0px'});
            $("#speech").css({left: '0px', top: '0px'});
        } else {
            xp += ((mouseX - xp) / 20);
            yp += ((mouseY - yp) / 20);
            sxp += ((smouseX - sxp) / 20);
            syp += ((smouseY - syp) / 20);
            $("#circle").css({left: xp + 'px', top: yp + 'px'});
            $("#speech").css({left: sxp + 'px', top: syp + 'px'});
        }
    }, 20);
});