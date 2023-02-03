const img = ["1.jpeg", "3.jpg", "4.jpeg"];
const chosenImg = img[Math.floor(Math.random() * img.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;
console.log(bgImg);
document.body.appendChild(bgImg);
