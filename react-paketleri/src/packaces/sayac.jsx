import React from 'react'
import CountUp,{ useCountUp } from 'react-countup';
 //useCountup bunun bir hooku bununla başlatma,durdurma vs işlemlerini yapabiliriz.
import "./sayac.css"

export default function Sayac() {
  return (
    <div className='app'>
        <div className="daireler">
        <div className="daire daire1"><CountUp end={100} duration={1} /></div>
        <div className="daire daire2">200</div>
        <div className="daire daire3">200tl</div>
        </div>
        <div className="butonlar">
            <button >Start</button>
            <button>PauseResume</button>
            <button>Reset</button>
            <button>Update</button>
        </div>
    </div>
  )
}
