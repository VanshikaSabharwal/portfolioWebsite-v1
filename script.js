const sideBar = document.querySelector(".bi-list");
const sideBarList = document.querySelector(".sideBarLinks");
const cross = document.querySelector(".bi-x-octagon");
sideBar.addEventListener("click", () => {
  sideBarList.style.display = "flex";
});
cross.addEventListener("click", () => {
  sideBarList.style.display = "none";
});

const footer = document.querySelector(".footer");
let year = new Date().getFullYear();
footer.innerHTML = `Copyright &copy; ${year} by Vanshika Sabharwal | All Rights Reserved.`;

// dark mode
const icon = document.getElementById("icon");
const body = document.querySelector("body");

icon.addEventListener("click", function () {
  this.classList.toggle("bi-brightness-high-fill");
  if (this.classList.toggle("bi-moon")) {
    body.style.background = "#1b1b1b";
    icon.style.color = "white";
    body.style.transition = "2s";
  } else {
    body.style.background = "white";
    icon.style.color = "black";
    body.style.transition = "2s";
    footer.style.color = "black";
  }
});
