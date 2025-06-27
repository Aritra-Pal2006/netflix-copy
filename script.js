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

