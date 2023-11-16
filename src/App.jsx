import React , { useEffect, useState } from 'react'
import './App.css'

// red - zero -odd
// yellow - cross - even
function App() {
  const [count, setCount] = useState(1);
  const [chance, setChance] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  
  const EMPTY = 0;
  const ZERO = 1;
  const CROSS = 2;

  const [grid, setGrid] = useState(Array(9).fill(EMPTY));

  useEffect(() => {
    if (count % 2 !== 0) {
      setChance('red')
    } else {
      setChance('yellow')
    }
    console.log(count);
  }, [count]);
  console.log(grid.length);
  return (
      <div className="box-cont">
        <div className="container">
          <div className="row">
            {
              grid.map((cell, index) => {
                return (
                  <button
                    onClick={() => {
                      setCount((prevCount) => prevCount + 1);
                      setIsSelected(true);
                      console.log("Button Clicked. New Count:", count + 1);
                    }}
                    className={`cell-cont ${isSelected ? chance : ""}`}
                  >
                    {index+1}
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
