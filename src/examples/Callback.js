import React,{useState,useCallback} from "react";
import ItemsList from "./itemsList";

function complexComputed(num){
  let i = 0;
  while(i < 1000000) i++
  return num *2;
}

function App() {
  const [colored,setColored] = useState(false);
  const [count,setCount] = useState(1)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

const generateItemsFrmAPI = useCallback( () => {
  return new Array(count).fill('').map((_, i) => `Элемент ${i +1 }`)
}, [count] )

  return (
<>
<h1 style={styles}>Количество элементов:  {count}</h1>
<button className={'btn'} onClick={() => setCount(prev => prev+1)}>Добавить</button>
<button className={'btn'} onClick={() => setColored(prev => !prev)}>Изменить</button>
<ItemsList getItems={generateItemsFrmAPI} />
</>
  );
}

export default App;
 