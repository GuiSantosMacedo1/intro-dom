const dateFooter = document.querySelector("#ano-atual");
const currentYear = new Date().getFullYear();
dateFooter.textContent = currentYear;