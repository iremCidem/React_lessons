import React from 'react';
import {Outlet} from 'react-router-dom'

export default function Anakart() {
  return (
    <div>
        <h3>anakart sayfası</h3>
        <Outlet/>
        </div>
  )
}

