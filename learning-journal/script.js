const date = document.getElementById("copyright-date");

//Applies the current date to the footer;
const thisYear = new Date();
date.textContent = thisYear.getFullYear();
