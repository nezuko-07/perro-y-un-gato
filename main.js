img = "";
function preload(){
    img = loadImage('dog_cat.jpg');
}
function draw(){
    image(img, 0,0,700,500);
    fill("#FF0000");
    text("perro", 220, 70);
    noFill();
    stroke("#FF0000");
    rect(30,60, 300,420);
}
function setup(){
    canvas = createCanvas(700, 500);
    canvas.center();
}