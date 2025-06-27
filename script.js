const navbar = document.getElementById('navbar');
window.addEventListener('scroll',change);
function change()
{
    if(window.scrollY>5){
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-black');
    }
    else{

        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-transparent');

    }
}