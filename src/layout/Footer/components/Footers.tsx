import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../asset/img/logo-bottom.png';
import FormFooter from './FormFooter';

function Footer() {
  return (
    <footer>
      <div className="container custorm-container d-flex flex-wrap first">
        <div className="about">
          <h5>About</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiumod tempor incididunt ut labore et dolore magna aliqua. ut enim
            ad minim veniam
          </p>
          <ul>
            <li className="list-footer">
              <h5>Email: </h5> infor@jstemplate.net
            </li>
            <li className="list-footer">
              <h5>Phone: </h5> 880&nbsp;123&nbsp;456&nbsp;789
            </li>
          </ul>
        </div>
        <div className="quick-link">
          <h5>Quick Link</h5>
          <ul>
            <li>
              <Link to={''}>Home</Link>
            </li>
            <li>
              <Link to={''}>About</Link>
            </li>
            <li>
              <Link to={''}>Blog</Link>
            </li>
            <li>
              <Link to={''}>Archived</Link>
            </li>
            <li>
              <Link to={''}>Author</Link>
            </li>
            <li>
              <Link to={''}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="category">
          <h5>Category</h5>
          <ul>
            <li>
              <Link to={''}>Lifestyle</Link>
            </li>
            <li>
              <Link to={''}>Technology</Link>
            </li>
            <li>
              <Link to={''}>Travel</Link>
            </li>
            <li>
              <Link to={''}>Business</Link>
            </li>
            <li>
              <Link to={''}>Economy</Link>
            </li>
            <li>
              <Link to={''}>Sports</Link>
            </li>
          </ul>
        </div>
        <FormFooter />
      </div>
      <div className="last container custorm-container">
        <div className="logo-footer">
          <Link to={''}>
            <img className="img-fluid" src={logo} alt="" />
          </Link>
          <div>
            <Link to={''}>
              <span>
                Meta<strong>Blog</strong>
              </span>
            </Link>
            <p>
              ©<span>JS Template 2023</span>. All Rights Reserved.
            </p>
          </div>
        </div>
        <ul>
          <li className="nav-item">
            <Link to={''} className="nav-link">
              Terms of Use
            </Link>
          </li>
          <li className="nav-item">
            <Link to={''} className="nav-link">
              Privacy Policy
            </Link>
          </li>
          <li className="nav-item">
            <Link to={''} className="nav-link">
              Cookie Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
