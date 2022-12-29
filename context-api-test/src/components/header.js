import React, { useContext } from 'react'
import { GlobalContext} from './Context/globalState'

export default function Header() {
  const değer = useContext(GlobalContext)
  return (
    <div className='col-6' >
        <div className='alert alert-primary '>
        <h2>Context'ten gelen veri: {değer}</h2>
        
        </div>
   
    </div>
    
  )
}
//header içerisinde contextApiden gelecek değeri kullanmak istiyoruz.
