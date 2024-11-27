// toggle class active
const navbarNav = document.querySelector
('.Navbar-nav');
// ketika menu di klik
document.querySelector ('#menu').
onclick = () => {
navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav mode tablet
const menu = document.querySelector('#menu');
document.addEventListener('click',function(e){
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

const paragraphs = document.querySelectorAll(".content-About");
document.addEventListener("scroll", function(){
    paragraphs.forEach((paragraphs) => {
        if (isInView(paragraphs)){
            paragraphs.classList.add("content-About--visible");
        }
    });
});

function isInView(element){
    const rect = element.getBoundingClientRect();
    return(
        rect.bottom > 0 &&
        rect.top <
        (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}