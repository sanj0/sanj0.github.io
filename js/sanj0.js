const birthday = new Date(2004, 0, 13);

document.getElementById("age").innerHTML = Math.floor((Date.now() - birthday) / 1000 / 60 / 60 / 24 / 365.4);