import React,{useState} from "react";

function computeInitialCounter(){
  console.log('Some calculation')
  return Math.trunc(Math.random()* 20)
}

function App() {
  const [counter,setCounter] = useState( () => {
   return computeInitialCounter()
  });

  const [state,setState] = useState ({
    title: 'Счетчик',
    date: Date.now(),
    sample: 'fade'
  })
  
  function increment () {
    setCounter((prevCounter) =>{
      return prevCounter + 1; 
    })
    // setCounter(prev => prev +10)
  }
  function upDateTitle(){
    setState(prev => {
      return{
        ...prev,
        title: 'Новое название'
      }
    })
  }
  return (
    <div >
<h2>Счетчик: {counter}</h2>
<button onClick={increment} className="btn">Считать</button>
<button onClick={upDateTitle} className="btn">Изменить название</button>
<pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
