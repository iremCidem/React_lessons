import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { BsFillSuitHeartFill,
BsHeadphones
 } from "react-icons/bs";
 import {IconContext} from 'react-icons';

export default function Icons() {
  return (
    <div>
        <IconContext.Provider value={{color:"red",size:"60"}}>
        <h3> Lets go for a <FaBeer />? </h3>
        <h3>yeapp, pleasee <BsFillSuitHeartFill/></h3>
        <BsHeadphones/>
        </IconContext.Provider>
        </div>
  )
}
//eğer bütün iconların aynı özellikte olmasını istersek; 



