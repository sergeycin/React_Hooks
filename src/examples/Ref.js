import React,{useState, useEffect,useRef} from "react";
import { renderIntoDocument } from "react-dom/test-utils";



function App() {

  // const [renderCount,set] = useState
  const [value, setValue] = useState('initial');
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  useEffect(()=>{
    renderCount.current++;
    console.log(inputRef.current.value)
  })
 
  const focus = () => inputRef.current.focus();
  return (
    <div >
      <h2>Количество рендеров: {renderCount.current}</h2>
      <input ref={inputRef} type="text" onChange = {e => setValue(e.target.value)} value={value}/>
      <button className="btn" onClick={focus}></button>
    </div>
  );
}

export default App;
 