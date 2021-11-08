import React,{useState} from "react";

function computeInitialCounter(){
  console.log('Some calculation')
  return Math.trunc(Math.random()* 20)
}

function App() {
  const [counter,setCounter] = useState( () => {
   return computeInitialCounter()
  });

  const [] = useState ({
    title: 'Счетчик',
    date: Date.now()
  })
  
  function increment () {
    setCounter((prevCounter) =>{
      return prevCounter + 1; 
    })
    // setCounter(prev => prev +10)
  }
  return (
    <div >
<h2>Счетчик: {counter}</h2>
<button onClick={increment} className="btn"></button>
    </div>
  );
}

export default App;
