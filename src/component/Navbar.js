import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item"><a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item"><a className="nav-link" href="/">business</a>
        </li>
        <li className="nav-item"><a className="nav-link" href="/about">entertainment</a></li>
        <li className="nav-item"><a className="nav-link" href="/about">general</a></li>
        <li className="nav-item"><a className="nav-link" href="/about">health</a></li>
        <li className="nav-item"><a className="nav-link" href="/about">science</a></li>
        <li className="nav-item"><a className="nav-link" href="/about">sports</a></li>
        <li className="nav-item"><a className="nav-link" href="/about">technology</a></li>
       
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </>
    )
  }
}
