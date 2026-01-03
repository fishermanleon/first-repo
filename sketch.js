function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB)

}
let centerX = 0
let centerY = 0
let marginX = 0
let marginY =0
let boxX=0
let boxY =0 
let containerSize= 0
let boxSize= 0
let newmarginX =0
let newmarginY = 0
let hue = 0
let sat = 0
let bri = 0

function draw(){
centerX = windowWidth/2
centerY = windowHeight/2
marginX = windowWidth*0.1
marginY = windowHeight*0.1
boxSize = containerSize/15

rectMode(CORNER)
//rect(marginX,marginY,boxSize,boxSize)
if (windowWidth >= windowHeight){
containerSize = windowHeight-marginY
}
if (windowWidth <= windowHeight){
containerSize = windowWidth-marginX
}

newmarginX = (windowWidth-containerSize)/2
newmarginY = (windowHeight-containerSize)/2

for (col = 0; col<15; col++) {
for (row = 0; row<15;row++) {

    hue = map(mouseX, 0, windowWidth, 0,360)
    sat = row*6.6
    bri = 100-col*6.6

    colourBox(hue,sat,bri,newmarginX+(row*boxSize),newmarginY+(col*boxSize),boxSize)
    }
}
}



function colourBox(hue,sat,bri,x,y,s) {
    rectMode(CORNER)
    noStroke()
    fill(hue,sat,bri)
    rect(x,y,s,s)
}

function windowResized() {
 resizeCanvas(windowWidth,windowHeight,redraw)
}

// function draw() {
//     background(220);
//     updateSizing()


//     let total = 30    
    

//     fill(150)
//     //x,y,w,h
//     // rect(marginX,marginY,boxSize,boxSize)
//     //rect(centerW, centerH,450,450)

//     //rect(containerW,containerH,30,30)
// translate(centerW-225,centerH-225)
//     for (i = 0; i<15;i++) {
//        colourBox(255-i*17,255-i*17,255-i*17,containerW+i*total,centerH-225)
        
//     }

//     for (i = 0; i<15;i++) {
//         colourBox(255-i*17,255-i*17,255-i*17,containerW+i*total,containerH+225)
//     }

// }


// function colourBox(red,green,blue,x,y) {

//     noStroke()
//     rectMode(CENTER)
//     fill(red,green,blue)
//     rect(x,y,sqrSize,sqrSize)
// }

// let boxSize = 0
// let boxX = 0
// let boxY =0

// let centerW = 0
// let centerH = 0
// let containerW =0
// let containerH =0
// let containerX =0
// let containerY =0
// let sqrSizeW = 0
// let sqrSizeH = 0
// let margin = 0
// let marginX = 0
// let marginY =0

// function windowResized() {
//     resizeCanvas(windowWidth,windowHeight)
//     updateSizing()
//     updateSquare();
// }

// function updateSizing (){
//     centerW =windowWidth/2
//     centerH =windowHeight/2
//     marginX=windowWidth*0.2
//     marginY=windowHeight*0.2

//     containerW = windowWidth-marginX/2
//     containerH = windowHeight-marginY/2
// }

// function updateSquare() {
//     boxSize = min(width, height) * 0.5;
//     boxX=marginX/2
//     boxY = marginY/2
    
//     rect(boxX,boxY,boxSize,boxSize)

// }