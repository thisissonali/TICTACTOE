import React , { useEffect, useState } from 'react'
import './App.css'

// red - zero -odd
// yellow - cross - even
let count = 0;
const EMPTY = 0;
const ZERO = 1;
const CROSS = 2;

function App() {
  const [grid, setGrid] = useState(Array(9).fill(EMPTY));
  
  const isRedWinner = (index) => {
    // 0 1 2
    // 3 4 5
    // 6 7 8

    // 0 3 6
    // 1 4 7
    // 2 5 8

    // 0 4 8
    // 2 4 6
    console.log(index);
    if ((grid[0] == 1 && grid[1] == 1 && grid[2] == 1) || (grid[3] == 1 && grid[4] == 1 && grid[5] == 1) || (grid[6] == 1 && grid[7] == 1 && grid[8] == 1)){
      return true;
    }
    else if ((grid[0] == 1 && grid[3] == 1 && grid[6] == 1) || (grid[1] == 1 && grid[4] == 1 && grid[7] == 1) || (grid[2] == 1 && grid[5] == 1 && grid[8] == 1)) {
      return true;
    }
    else if ((grid[0] == 1 && grid[4] == 1 && grid[8] == 1) || (grid[2] == 1 && grid[4] == 1 && grid[6] == 1)) {
      return true;
    } else {
      return false;
    }
  }

  return (
      <div className="box-cont">
        <div className="container">
          <div className="row">
            {
            grid.map((cell, index) => {
                  let color = "";
                  switch (cell) {
                   case CROSS:
                    color = "yellow";
                    break;
                   case ZERO:
                    color = "red";
                    break;
                   default:
                    break;
              }
              return (
                <button
                  onClick={() => {
                    setGrid(
                      grid.map((item, indx) => {
                        if (indx === index && item === EMPTY) {
                          if (count % 2) {
                            return CROSS;
                          } else {
                            return ZERO;
                          }
                        }
                        return item;
                      })
                    );
                    {
                      isRedWinner(index) && alert("Red winner")
                    }
                    count++;
                      
                  }}
                  
                  className={`cell-cont ${color}`}
                  key={index}
                  >
                    {cell}
                  </button>
                )
              
              })
            }
          </div>
          
        </div>
      </div>
  );
}

export default App
