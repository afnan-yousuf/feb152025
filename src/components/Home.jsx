import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (

        <div className='container'>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/posts">Post</Link>
      </li>
    </ul>
   
  </div>
</nav>
        <h1>Slider</h1>

        <div className='row'>
            <div className='col-sm-2'>Sidebar</div>
            <div className='col-sm-8'><Outlet /></div>
            <div className='col-sm-2'>Sidebar</div>
        </div>
        <div className='row'>
            <h1>Footer</h1>
        </div>

    </div>
  )
}

export default Home