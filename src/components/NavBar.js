import React from 'react'
import CartWidget from './CartWidget'
import Contador from '../componentespractica/Contador'

const NavBar = () => {
  const estilos ={
    border:'solid red 1px',
    color: 'blue'
  }
  return (
    <div className="navbar bg-base-300">
  <div className="flex-1">
  <img src="https://cdn-icons-png.flaticon.com/512/3408/3408506.png" alt="" className="object-scale-down h-30 w-11 ..."/>
  <div className="flex-row">
    <ul className="menu menu-horizontal p-0">
      <li><a>Tienda</a></li>
      <li tabindex="0">
        <a>
          Consolas
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>PS4</a></li>
          <li><a>XBOX</a></li>
          <li><a>SWITCH</a></li>
        </ul>
      </li>
      <li><a>Nosotros</a></li>
    </ul>
  </div>
  </div>
  
  <div className="flex-none">
    
    <CartWidget></CartWidget>

    <div className="dropdown dropdown-end">
      <label tabindex="0" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://cdn-icons-png.flaticon.com/512/727/727368.png" />
        </div>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default NavBar