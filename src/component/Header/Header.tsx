import React from 'react';
// import '../asset/style/layout.css';
import logo from '../asset/img/logo-header.png';
import '../asset/style/media-screen.css';
import Nav from './Nav';
import Input from './Input';
import Dark from './Dark';
import NavCreate from './NavCreate';

function Header () {
  return (
    <header>
            <nav className="navbar navbar-expand-lg container custorm-container nav-header">
                <div className="container-fluid">
                    <a className="navbar-brand me-auto order-0" href="/">
                        <img src={logo} alt="Logo" className="d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler d-md-none bg-light btn-show-nav" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Nav />
                    <form className="d-flex align-items-center" action="#">
                        <Input />
                        <Dark />
                    </form>
                </div>
                <NavCreate />
            </nav>
        </header>
    );
}

export default Header;
