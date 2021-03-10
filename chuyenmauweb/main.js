const buttonRandom = document.querySelector(".button-random");
const color = ["#00aefd","#ffa400","#07a787","#ff7870","#e74c3c","#2979ff"];
buttonRandom.addEventListener("click",function(){
    const randomColor = color[Math.floor(Math.random() * color.length)];
    document.body.style.backgroundColor = randomColor;
});