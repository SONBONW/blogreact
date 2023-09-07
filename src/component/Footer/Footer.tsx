import React from 'react';
import { Link } from 'react-router-dom';
import '../asset/style/layout.css'
import '../asset/style/media-screen.css'
import logo from '../asset/img/logo-bottom.png';
import About from './About';
import FormFooter from './FormFooter';
import Category from './Category';
import QuickLink from './QuickLink';

function Footer() {
    return (
        <footer>
            <div className="container custorm-container d-flex flex-wrap first">
                <About />
                <QuickLink />
                <Category />
                <FormFooter />
            </div>
            <div className="last container custorm-container">
                <div className="logo-footer">
                   <Link to={''}>
                        <img className="img-fluid" src={logo} alt="" />
                    </Link>
                    <div>
                       <Link to={''}>
                            <span>Meta<strong>Blog</strong></span>
                        </Link>
                        <p>
                            ©
                            <span>JS Template 2023</span>
                            . All Rights Reserved.
                        </p>
                    </div>
                </div>
                <ul>
                    <li className="nav-item">
                        <Link to={''} className="nav-link">Terms of Use</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={''} className="nav-link">Privacy Policy</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={''} className="nav-link">Cookie Policy</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
