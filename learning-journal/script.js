const date = document.getElementById("copyright-date");

//Applies the current date to the footer;
const thisYear = new Date();
date.textContent = thisYear.getFullYear();

//Handle non-CSS responsiveness

function handleWidthChange() {
  const mq = window.matchMedia("(min-width: 768px)");

  const singlePostElements = document.querySelectorAll(
    ".single-post h1, .single-post time, .single-post p, .single-post h2"
  );

  const singlePostElementsArray = [...singlePostElements];

  if (mq.matches) {
    singlePostElementsArray.forEach((element) => {
      element.style.paddingLeft = "5rem";
      element.style.paddingRight = "5rem";
    });
  } else {
    singlePostElementsArray.forEach((element) => {
      element.style.paddingLeft = "0rem";
      element.style.paddingRight = "0rem";
    });
  }
}

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleWidthChange, 200);
});
