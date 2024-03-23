function preload(){
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    image(video,200,200,200,200);
    tint(tint_color);
   
   
    
    fill(128,0,0);
    stroke(128,0,0);
    rect(78,40,450,30);
    
    fill(128,0,0);
    stroke(128,0,0);
    rect(78,40,30,400);
   
    fill(128,0,0);
    stroke(128,0,0);
    rect(510,40,30,400);

    fill(128,0,0);
    stroke(128,0,0);
    rect(78,420,462,30);
    fill(0,128,0);
    stroke(0,128,0);
    circle(100, 60, 65);

    
fill(0,128,0);
stroke(0,128,0);
circle(527, 66, 65);

fill(0,128,0);
    stroke(0,128,0);
    circle(95,425, 65);

    fill(0,128,0);
    stroke(0,128,0);
    circle(525,425, 65);

    

}
function take_snapshot(){
    save("student_name.png");
}
function filter_tint(){
    tint_color = document.getElementById("color").value;
}
