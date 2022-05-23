import React from 'react'
import CartWidget from './CartWidget'
import Contador from '../componentespractica/Contador'
import { Link } from 'react-router-dom'
import './styles/Item.css';

const NavBar = () => {
  const estilos ={
    border:'solid red 1px',
    color: 'blue'
  }
  return (
    
    <div className='navs'>
        <div className="navs1 navbar bg-base-400">
          <div className="flex-1">
          <img src="https://cdn-icons-png.flaticon.com/512/3408/3408506.png" alt="" className="object-scale-down h-30 w-11 ..."/>
          <div className="flex-row">
            <ul className="menu menu-horizontal p-0">
              <li><Link to={'/'}>Inicio</Link></li>
              <li><Link to={'/juegos'}>Juegos</Link></li>
              <li tabIndex="0">
                <a>
                  Consolas
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul className="menuconsola">
                  <li className='consola'><Link to={'/consolas/PS4'}>PS4</Link></li>
                  <li className='consola'><Link to={'/consolas/SWITCH'}>SWITCH</Link></li>
                  <li className='consola'><Link to={'/consolas/XBOX'}>XBOX</Link></li>
                </ul>
              </li>
              <li><Link to={'nosotros'}>Nosotros</Link></li>
            </ul>
          </div>
          </div>
  
            <div className="flex-none">
              
              <CartWidget></CartWidget>

              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://p1.hiclipart.com/preview/843/601/229/avatar-icon-human-icon-person-icon-profile-icon-worker-icon-white-png-clipart-thumbnail.jpg" />
                  </div>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 menucarrito1">
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


          <div class="navs2 navbar bg-base-500">
  <div class="navbar-start">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </label>
      <ul tabindex="0" class="menuconsola menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li className='consola'><Link to={'/juegos'}>Todos!</Link></li>
      <li className='consola'><Link to={'/consolas/PS4'}>PS4</Link></li>
      <li className='consola'><Link to={'/consolas/SWITCH'}>SWITCH</Link></li>
      <li className='consola'><Link to={'/consolas/XBOX'}>XBOX</Link></li>
      </ul>
    </div>
  </div>
  </div>
  <div class="navbar-center">
    <a class="btn btn-ghost normal-case text-xl">Game Over!</a>
  </div>
  <div class="navbar-end">
  <div class="navbar-end">
  <img src="https://cdn-icons-png.flaticon.com/512/3408/3408506.png" alt="" className="object-scale-down h-30 w-11 ..."/>
  </div>
  
  </div>
</div>
    </div>

  )
}

export default NavBar