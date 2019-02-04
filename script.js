let currentPlayer = 1;
const reset = document.querySelector('.reset')
var grid = document.querySelector('.grid')

for (var i=0; i<6; i++){
    for (var j=0; j<7; j++){
        var div = document.createElement('div')
        div.className = 'cell'
        div.setAttribute('data-row', 6-i)
        div.setAttribute('data-col', 7-j)
            div.addEventListener('click', function(e) {
                if (currentPlayer === 1){
                    currentPlayer = 2;
                    if (i !== 5) {
                        
                    }
                    e.target.style.backgroundColor = "red";
                } else {
                    e.target.style.backgroundColor = "yellow"
                    currentPlayer = 1;
                }
                
                e.target.style.pointerEvents = 'none'
            });
        grid.appendChild(div)
    }
}


// reset.addEventListener('click', function(e){

// }


// for (k=0; k<43; k++) {
//     gird[k].addEventListener('click', function(e) {
//         if (currentPlayer === 1){
//             e.target.style.backgroundColor = "red";
//             currentPlayer = 2;
//         } else {
//             e.target.style.backgroundColor = "yellow"
//             currentPlayer = 1;
//         }
//         e.target.style.pointerEvents = 'none'
//     });
// }

// reset.addEventListener('click', function(e) {
//     for(i = 0; i<cells.length; i++) {
//         const element = cells[i];
//         element.style.backgroundColor = "white";
//         element.style.pointerEvents = "auto";
//     } 
// } )

