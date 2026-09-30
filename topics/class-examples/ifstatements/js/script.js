/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let creature = {
    x:150,
    y:350,
    w:220,
    h:400,
    eye:{
        fillColor:"#e8e4e4",
        size:540/30.5,
        center_x:100,
        center_y:299
    },
fillStates:{
    happy:"#59478c",
    sad:"#2f646b",
    angry:"#d0205b",
    neutral:"#b5c221",
},
currentFill:"#b5c221",
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800,600);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {



    let distance = dist(creature.x,creature.y,mouseX,mouseY);
    let mouseIsMoving = (movedX >0 ||movedY >0)
    //console.log(distance);
    if(distance < creature.w/2 && mouseIsMoving){
        creature.currentFill = creature.fillStates.angry;

    
    }
     else{
    creature.currentFill = creature.fillStates.neutral;
    }


    //if(mouseIsPressed === true){
    //    creature.currentFill = creature.fillStates.angry;

//}
//else if(keyIsPressed === true){
    //creature.currentFill = creature.fillStates.happy;
//}

    background(0);
    push();
//body
fill(creature.currentFill)
ellipse(creature.x,creature.y,creature.w,creature.h)

fill(creature.eye.fillColor)
//left eye
ellipse(creature.eye.center_x-creature.eye.size,creature.eye.center_y,creature.eye.size,creature.eye.size)
//right eye
ellipse(creature.eye.center_x+creature.eye.size,creature.eye.center_y,creature.eye.size,creature.eye.size)

    pop();

}