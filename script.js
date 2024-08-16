const sidebar = document.querySelector('.sidebar');

function showSidebar(){
  sidebar.style.display = "flex";
  const nav = document.querySelector('header');
  nav.classList.remove('backdrop-blur-lg');
}

function hideSidebar(){
  sidebar.style.display = "none";
  const nav = document.querySelector('header');
  nav.classList.add('backdrop-blur-lg'); // Add backdrop blur class
}