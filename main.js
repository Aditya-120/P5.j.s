function preload(){}

function setup()
{
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,100,90,440,300);
    fill("green");
    stroke("red");
    rect(70, 30, 500, 20);
    rect(70, 430, 500, 20);
    rect(30, 30, 20, 420);
    rect(590, 30, 20, 420);
    circle(40, 40, 60);
    circle(600, 40, 60);
    circle(600, 440, 60);
    circle(40, 440, 60);
}

function take_snapshot()
{
    save('student_name.png');
}
