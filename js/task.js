function triangleTaskCalculate(){
    const triangleTaskBase = document.getElementById('triangle-task-base');
    const triangleTaskText = triangleTaskBase.value;
    const base =parseFloat(triangleTaskText);
    // console.log(base)

    const triangleTaskHeight = document.getElementById('triangle-task-height');
    const triangleTaskHeightText = triangleTaskHeight.value;
    const height = parseFloat(triangleTaskHeightText);
    // console.log(height)

    const area = 0.5 * base * height;
    console.log(area);

    const triangleResultArea = document.getElementById('triangle-task-area');
    triangleResultArea.innerText = area;

}



// rectangle

function calculateRectangleTaskArea(){
    const rectangleTaskWidth = document.getElementById('rectangle-task-width');
    const rectangleTaskWidthText = rectangleTaskWidth.value;
    const width = parseFloat(rectangleTaskWidthText);
    console.log(width)


    const rectangleTaskLength = document.getElementById('rectangle-task-length');
    const rectangleTaskLengthText = rectangleTaskLength.value;
    const length = parseFloat(rectangleTaskLengthText);
    

    const area = width * length;
    

    const rectangleArea = document.getElementById('rectangle-task-area');
    rectangleArea.innerText = area;
}




// Rhombus

function calculateRhombusTaskArea(){
    const base = getInputValueById('rhombus-task-width');
    const length = getInputValueById('rhombus-task-length');


    const area = 0.5 * base * length;
    // console.log(area)

    setInnerTextById('rhombus-task-area', area)
    
}

function getElementById(inputFieldId){
   const inputField = document.getElementById(inputFieldId);
   const inputTaskValueText = inputField.value;
   const inputValueTask = parseFloat(inputTaskValueText);
   return inputValueTask;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}




// pentagon
function calculatePentagonTaskArea(){
    const pentagonP = getInputValueById('pentagon-task-p');
    const pentagonB = getInputValueById('pentagon-task-b');
    const pentagonArea = 0.5 * pentagonP * pentagonB ;
    setInnerTextById('pentagon-task-area', pentagonArea);
}