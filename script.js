function update(){
    let box = document.getElementById('box');
    box.style.rotate = counter+'deg';
    counter++;
    requestAnimationFrame(update);
}
let counter = 0
requestAnimationFrame(update);