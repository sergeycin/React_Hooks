import React, {useContext} from "react";
import {AlertContext} from './App'

export default function Alert(){
   const alert =  useContext(AlertContext)
 
    if(!alert) return null

    return (
        <div className={'aler alert-danger'}>
            Это очень важное сообщение
        </div>
    )
}