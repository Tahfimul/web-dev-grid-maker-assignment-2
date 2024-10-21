// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
let numCells = 0;
let single_cell_coloring = false;

let introductory_panel_info = document.getElementById("info")
let grid = document.getElementById("grid")

const selectedColorFillType = document.getElementById('selectedColorFillType');
const colorFillTypes = document.getElementById('colorFillTypes');
const colorFillTypesDropdownItems = document.querySelectorAll('.dropdown-item');

 // Toggle dropdown visibility
selectedColorFillType.addEventListener('click', (event) => {
    event.stopPropagation()
    colorFillTypes.style.display = colorFillTypes.style.display === 'none' ? 'block' : 'none';
});

// Detect individual item selection (including re-selection)
colorFillTypesDropdownItems.forEach(item => {
    item.addEventListener('click', (event) => {
        
        const selectedValue = event.target.dataset.value;
        selectedColorFillType.textContent = event.target.innerText;
        colorCell(selectedValue)
        colorFillTypes.style.display = 'none';  // Close the dropdown
    });
});

// Close the dropdown if clicked outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('#selectedColorFillTypeDropdown')) {
        colorFillTypes.style.display = 'none';
    }
});

// Add a row
function addR() {
    
    if (grid.children.length==0)
        numCols = window.prompt("How many cells do you want to include in the first row?")
    let row = document.createElement("tr")
    for(let i=0; i<numCols; i++)
    {
        let cell_id = numCells
        let cell = document.createElement("td")
        cell.id = cell_id
        cell.onclick = function(){onCellSelect(cell_id)}
        row.appendChild(cell)
        numCells++
    }
    if(numCols>0)
    {
        grid.appendChild(row)
        numRows++
    }
        
}

function onCellSelect(cell_id)
{
    
   if(single_cell_coloring)
    {
        var cell = document.getElementById(cell_id);
        switch(colorSelected)
        {
            case "Red":
                cell.style.backgroundColor = "red";
                break
            case "Blue":
                cell.style.backgroundColor = "blue";
                break
            case "Green":
                cell.style.backgroundColor = "green";
                break
            case "Yellow":
                cell.style.backgroundColor = "yellow";
                break
            default:
                break
        }
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
        cell.onclick = function(){onCellSelect(cell_id)}
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

function colorCell(fill_type)
{
    // var fill_type = document.getElementById("selectedColorFillType").value;
    
    switch(fill_type)
    {
        case "fillU":
            fillU()
            break
        case "fillAll":
            fillAll()
            break
        case "fillACell":
            fillACell()
            break
    }
}

// Fill all uncolored cells
function fillU(){
    for(let i=0; i<numRows; i++)
    {
        var row = grid.children[i]
        for(let j=0; j<numCols; j++)
        {
            var cell = row.children[j]
            if(cell.style.backgroundColor==='')
            {
                switch(colorSelected)
                {
                    case "Red":
                        cell.style.backgroundColor = "red";
                        break
                    case "Blue":
                        cell.style.backgroundColor = "blue";
                        break
                    case "Green":
                        cell.style.backgroundColor = "green";
                        break
                    case "Yellow":
                        cell.style.backgroundColor = "yellow";
                        break
                    default:
                        break
                }
            }
        }
    }
        
}

// Fill all cells
function fillAll(){
    for(let i=0; i<numRows; i++)
        {
            var row = grid.children[i]
            for(let j=0; j<numCols; j++)
            {
                var cell = row.children[j]
                switch(colorSelected)
                {
                    case "Red":
                        cell.style.backgroundColor = "red";
                        break
                    case "Blue":
                        cell.style.backgroundColor = "blue";
                        break
                    case "Green":
                        cell.style.backgroundColor = "green";
                        break
                    case "Yellow":
                        cell.style.backgroundColor = "yellow";
                        break
                    default:
                        break
                }
            }
            
        }
}

function fillACell()
{
    single_cell_coloring = true;
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