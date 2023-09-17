const year = new Date();
document.querySelector('#copyright').textContent = year.getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;