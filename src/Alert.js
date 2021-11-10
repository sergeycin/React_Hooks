import React, {useContext} from "react";

export default function Alert(){
   const alert =  useContext(AlertContext)

    if(!al)

    return (
        <div className={'aler alert-danger'}>
            Это очень важное сообщение
        </div>
    )
}