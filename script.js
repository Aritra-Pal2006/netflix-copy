const navbar = document.getElementById('navbar');

window.addEventListener('scroll', change);

function change() {
  if (window.scrollY > 5) {
    navbar.classList.remove('bg-gradient-to-b', 'from-black/80', 'to-transparent');
    navbar.classList.add('bg-black');
  } else {
    navbar.classList.remove('bg-black');
    navbar.classList.add('bg-gradient-to-b', 'from-black/80', 'to-transparent');
  }
}

const magnify = document.getElementById('Search');
magnify.addEventListener('click', reveal);

function reveal() {
  const inputBox = document.getElementById('input-box');
  inputBox.classList.toggle('hidden');
  if (!inputBox.classList.contains('hidden')) {
    inputBox.focus();
  }
}

function display() {
  alert("button clicked!!");
}
