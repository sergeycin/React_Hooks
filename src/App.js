import React,{useState,useCallback} from "react";
import Alert from "./Alert";
import Main from "./Main";

const AlertContext = React.createContext()

function App() {

  const [alert,setAlert] = useState(false)
  const toggleAlert = () => setAlert(prev => !prev)
  return (
    

<AlertContext.Provider value={alert}>
<div className={'container'}>
<Alert/>
<Main />

</div>
</AlertContext.Provider>
  );
}






















export default App;
