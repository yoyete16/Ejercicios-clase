function setup(){
createCanvas(200,200);
background(125);
   

}

function draw(){
clear();

    ellipse(mouseX, mouseY, 50, 50);
if((mouseX<100)&&(mouseY<100)){
fill(color("green"));

}else if((mouseX>100)&&(mouseY<100)){
fill(color("red"));

}else if((mouseX>100)&&(mouseY>100)){
fill(color("blue"));

}else if((mouseX<100)&&(mouseY>100)){
 fill(color("pink"));
}
 
 
    
   
   


}
