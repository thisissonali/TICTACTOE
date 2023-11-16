import React , { useEffect, useState } from 'react'
import './App.css'

// red - zero -odd
// yellow - cross - even
function App() {
  const [count, setCount] = useState(1);
  const [chance, setChance] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (count % 2 !== 0) {
      setChance('red')
    } else {
      setChance('yellow')
    }
    console.log(count);
  }, [count]);
  
  return (
    <div className="box-cont">
      <div className="container">
        <div className="row">
          <button
            onClick={() => {
              setCount((prevCount) => prevCount + 1);
              setIsSelected(true);
              console.log("Button Clicked. New Count:", count + 1);
            }}
            className={`cell-cont {isSelected ? chance : ''}`}
          >
            1
          </button>
          <button
            onClick={() => {
              setCount((prevCount) => prevCount + 1);
              console.log("Button Clicked. New Count:", count + 1);
            }}
            className={`cell-cont ${chance}`}
          >
            2
          </button>
          <button
            onClick={() => setCount((prevCount) => prevCount + 1)}
            className={`cell-cont ${chance}`}
          >
            3
          </button>
        </div>
        <div className="row">
          <button
            onClick={() => setCount((prevCount) => prevCount + 1)}
            className={`cell-cont ${chance}`}
          >
            4
          </button>
          <button
            onClick={() => setCount((prevCount) => prevCount + 1)}
            className={`cell-cont ${chance}`}
          >
            5
          </button>
          <button
            onClick={() => setCount((prevCount) => prevCount + 1)}
            className={`cell-cont ${chance}`}
          >
            6
          </button>
        </div>
        <div className="row">
          <button
            onClick={() => setCount((prevCount) => prevCount + 1)}
            className={`cell-cont ${chance}`}
          >
            7
          </button>
          <button
            onClick={() => setCount((prevCount) => prevCount + 1)}
            className={`cell-cont ${chance}`}
          >
            8
          </button>
          <button
            onClick={() => setCount((prevCount) => prevCount + 1)}
            className={`cell-cont ${chance}`}
          >
            9
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
