const year = document.querySelector("#currentdate");

const today = new Date();

year.innerHTML = `getFullYear(): <span id="currentdate">${today.getFullYear()}</span>`;