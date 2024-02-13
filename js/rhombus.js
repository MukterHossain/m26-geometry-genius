

function calculateRhombusArea(){
    const rhombusOne = getInputValueById('rhombus-diagonal-1');
    const rhombusTwo = getInputValueById('rhombus-diagonal-2');
    const area = 0.5* rhombusOne * rhombusTwo;
    setInnerTextById('rhombus-area', area)
}
