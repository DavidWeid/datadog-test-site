console.log("Hello. This is a test site for Datadog by David Weid II.");

const toggleNav = () => {
  const navDiv = document.getElementById("nav-mobile");
  if (navDiv.style.display === "flex") {
    navDiv.style.display = "none";
  } else {
    navDiv.style.display = "flex";
  }
};
