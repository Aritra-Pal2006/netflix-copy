const navbar = document.getElementById('navbar');
window.addEventListener('scroll',change);
function change()
{
    if(window.scrollY>5){
        
        navbar.classList.add('bg-black');

    }
    else{

        navbar.className = "fixed w-full bg-gradient-to-b from-black/70 to-transparent text-white transition-all duration-300 z-50 px-8";

    }
}

const magnify=document.getElementById('Search');
magnify.addEventListener('click',reveal)
function reveal()
{
    if(document.getElementById('input-box').classList.contains('hidden')){

        document.getElementById('input-box').classList.remove('hidden');
        document.getElementById('input-box').focus();

    }
    else{

        document.getElementById('input-box').classList.add('hidden');

    }
}

function display(){
    alert("button clicked!!");
}

