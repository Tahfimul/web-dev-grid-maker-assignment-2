// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 


let introductory_panel_info = document.getElementById("info")
let grid = document.getElementById("grid")
// Add a row
function addR() {
    alert(`${grid.children.length}`); // Replace this line with your code.
    
    if (grid.children.length==0)
        numCols = window.prompt("How many cells do you want to include in the first row?")
    let row = document.createElement("tr")
    for(let i=0; i<numCols; i++)
    {
        let cell_id = (numCols*numRows)+i
        let cell = document.createElement("td")
        cell.id = cell_id
        cell.onclick = function(){alert(`clicked cell with id ${cell_id}`)}
        row.appendChild(cell)
    }
    grid.appendChild(row)
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}

function setDefaultInfo()
{
    setInfo("Welcome to Grid Maker! Here you can add or remove rows and columns, and stylize cells with colors")
}

function setInfo(info)
{
    introductory_panel_info.innerText = info
}

setDefaultInfo()