console.log("Hello");

const toggleNav = () => {
  const navDiv = document.getElementById("nav-mobile");
  if (navDiv.style.display === "flex") {
    navDiv.style.display = "none";
  } else {
    navDiv.style.display = "flex";
  }
};
