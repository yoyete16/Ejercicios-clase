function setup(){
    console.log("setup");
        createCanvas(200,200);
}


function draw(){
    clear();
    background(123);
    console.log("teclaPulsada: "+keyCode )

    switch(keyCode) {
        case 40:
             text ("abajo",100,100);
             break;
        case 38:
             text("arriba",100,40);
             break;
        case 37:
             text("izquierda",50,100);
             break;
        case 39:
             text("derecha",150,100);
             break;
        default:
             break;
    }


}