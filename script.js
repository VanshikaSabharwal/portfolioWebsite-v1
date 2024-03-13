const sideBar = document.querySelector(".bi-list");
const sideBarList = document.querySelector(".sideBarLinks");
const cross = document.querySelector(".bi-x-octagon");
sideBar.addEventListener("click", () => {
  sideBarList.style.display = "flex";
});
cross.addEventListener("click", () => {
  sideBarList.style.display = "none";
});
