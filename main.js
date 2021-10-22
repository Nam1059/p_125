left_wrist_x=0;
right_wrist_x=0;
difference=0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}

function modelLoaded()
{
    console.log('..Posenet Is Initialized..');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        left_wrist_x=results[0].pose.leftWrist.x;
        right_wrist_x=results[0].pose.rightWrist.x;
        difference=floor(left_wrist_x-right_wrist_x);
    }
}

function draw()
{
   background('#8B0000');
   textSize(difference);
   fill('#FFE787');
   text('NAMRATHA',50,400);
}

