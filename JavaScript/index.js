//---------------INDEX.HTML------------------------//
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

btn.onclick = () => {
  menu.style.display =
    menu.style.display === "flex" ? "none" : "flex";
};



//------------HEADER SECTION-------------------//
const signupBtn = document.querySelector('.signup-btn');
const loginBtn = document.querySelector('.login-btn');

signupBtn.addEventListener('click', () => {
  alert('Coming Soon!');
});

loginBtn.addEventListener('click', () => {
  alert('Coming Soon!');
});


//----------------TRACK SEARCH SECTION---------------------//
const searchBtn = document.querySelector(".search-btn");

  searchBtn.addEventListener("click", function () {
    alert("Coming Soon!");
  });
