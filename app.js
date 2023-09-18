let circle=document.getElementById("circle");
let square=document.getElementById("square");
let rectangle=document.getElementById("rectangle");
let inputBox=document.getElementById("number");
let box=document.getElementById("box");
let button=document.getElementById("button");
let numberInTheShapes=1;

button.onclick=()=>{

    let noOfShapes=inputBox.value;

    for(let i=1;i<=noOfShapes;i++){
        let shape=document.createElement("div");
        shape.innerText=numberInTheShapes;
        if(circle.checked==true){
            shape.className="circle";
        }

        if(square.checked==true){
            shape.className="square";
        }

        if(rectangle.checked==true){
            shape.className="rectangle";
        }
        box.append(shape);
        numberInTheShapes++;    
    }
}