const calculatorContainer = document.getElementById('calculator_container');
const displayArea = document.getElementById('display_area');

// Add a click event listener to the calculator container
calculatorContainer.addEventListener('click',(e) => {
    // Check if the clicked element is a button
    if (e.target.nodeName == 'BUTTON')
    {
        // Determine action based on the button you click on it 
        switch (e.target.textContent){
            case 'C': // Clear all input
                clear();
                break;
            case 'DEL': // Delete the last character from the display
                deleteOneValue();
                break;
            case '=':
                evaluate();
                break;
            default:
                addToDisplayArea(e.target.textContent)          
        }
    }
});

function clear(){
    displayArea.textContent = "";
}

// Append a value to the current content of the display
function addToDisplayArea(value){
    displayArea.textContent += value;
}

function deleteOneValue(){
    let currentContent = displayArea.textContent;
    displayArea.textContent = currentContent.substring(0,currentContent.length - 1);
}

function evaluate(){
    try{
        let calculation = math.evaluate(displayArea.textContent);
        displayArea.textContent = calculation;
    }
    catch(error){
        displayArea.textContent = 'Invalid Operation';
        console.error(error);
    }
}
