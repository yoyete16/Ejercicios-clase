
function setup(){
    console.log("setup")

    createCanvas(550,550)
    backgroundj(125)


}

function draw(){
    console.log("draw:" +frameCount);

    i =50;
    x =50;
    
    fill(color(frameCount%225));



    while(x<heigth-25){ 

        while(i <width-25){
        ellipse(i,x,25,25);
         i = i + 50;
        }
        x= x+50;
        i= 50; 
    }

}