import React, { useEffect, useRef} from 'react'
import { Toast } from 'primereact/toast';


export const Notification = ({ type, message}) => {
    const toast = useRef(null);
    console.log('llll')
    useEffect(() => {
        toast.current.show({severity:type, summary: message, life: 3000})
    },[])
    return(
        <div><Toast ref={toast} /></div>
    )
}
