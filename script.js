// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
let numCells = 0;

let introductory_panel_info = document.getElementById("info")
let grid = document.getElementById("grid")
// Add a row
function addR() {
    
    if (grid.children.length==0)
        numCols = window.prompt("How many cells do you want to include in the first row?")
    let row = document.createElement("tr")
    for(let i=0; i<numCols; i++)
    {
        // let cell_id = (numCols*numRows)+i
        let cell_id = numCells
        let cell = document.createElement("td")
        cell.id = cell_id
        cell.onclick = function(){alert(`clicked cell with id ${cell_id}`)}
        row.appendChild(cell)
        numCells++
    }
    if(numCols>0)
    {
        grid.appendChild(row)
        numRows++
    }
        
}

// Add a column
function addC() {
    
    if (grid.children.length==0)
    {
        numRows = window.prompt("How many cells do you want to include in the first column?")
        
        for(let i=0; i<numRows; i++)
        {
            var row = document.createElement("tr")
            grid.appendChild(row)
        }
        
    }
       
    for(let i=0; i<numRows; i++)
    {
        var row = grid.children[i]
        let cell_id = numCells
        let cell = document.createElement("td")
        cell.id = cell_id
        cell.onclick = function(){alert(`clicked cell with id ${cell_id}`)}
        row.appendChild(cell)
        numCells++
        // grid.appendChild(row)
    }
    numCols++
    
}

// Remove a row
function removeR() {
    if (grid.children.length>0)
    {
        console.log('removing row')
        var row = grid.children[grid.children.length-1]
        grid.removeChild(row)
        numRows--
        if(numRows==0)
            numCols=0
    }
    
}

// Remove a column
function removeC() {
    if(numRows>0)
    {
        for(let i=0; i<numRows; i++)
        {
            var row = grid.children[i]
            var last_col = row.children[row.children.length-1]
            row.removeChild(last_col)
        }
        numCols--
        if(numCols==0)
        {
            while(numRows>0)
                removeR()
            numRows=0
        }
            
    }
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