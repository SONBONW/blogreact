import React, { useEffect, useRef, useState } from "react";
import logo from "../../../asset/img/logo-header.png";
import Input from "./Search";
import Dark from "./Dark";
import NavCreate from "./LinkCreact";
import { Link, useLocation } from "react-router-dom";
import LinkWallet from "./LinkWallet";

function Header() {
    const location = useLocation();
    const [check, setCheck] = useState(false);
    const inputRef = useRef<HTMLDivElement | null>(null);
    const handleClickOutside = (e: any) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            setCheck(false);
        }
    };
    const handlerClick = () => {
        setCheck(!check);
    };
    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <header>
            <nav className="navbar navbar-expand-lg container custorm-container nav-header">
                <div className="container-fluid">
                    <a
                        className={`navbar-brand me-auto order-0 d-flex ${
                            !check ? "" : "show-logo"
                        }`}
                        href="/"
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className="d-inline-block align-text-top"
                        />
                    </a>
                    <button
                        className={`navbar-toggler d-md-none bg-light btn-show-nav ${
                            !check ? "d-block" : "d-none"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul
                        id="navbarSupportedContent"
                        className={`navbar-nav mb-lg-0 text-center collapse navbar-collapse d-md-flex ${
                            !check ? "" : "show-nav"
                        }`}
                    >
                        <li className="nav-item d-sm-none d-flex">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search"
                                className="border-0"
                            />
                            <button className="border-0">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
                                        stroke="#52525B"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                    />
                                    <path
                                        d="M10.5715 10.5716L14 14"
                                        stroke="#52525B"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </li>
                        <li className="nav-item item">
                            <Link
                                to="/home"
                                className={`nav-link ${
                                    location.pathname === "/home"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item item">
                            <Link
                                to="/blog"
                                className={`nav-link ${
                                    location.pathname === "/blog"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item item">
                            <Link
                                to="/single"
                                className={`nav-link ${
                                    location.pathname === "/single"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                Single Post
                            </Link>
                        </li>
                        <li className="nav-item item">
                            <Link
                                to="/author"
                                className={`nav-link ${
                                    location.pathname === "/author"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                Pages
                            </Link>
                        </li>
                        <li className="nav-item item">
                            <Link
                                to="/contact"
                                className={`nav-link ${
                                    location.pathname === "/" ? "active" : ""
                                }`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <form
                        className={`d-flex align-items-center ${
                            check ? "show-input" : ""
                        } `}
                        action="#"
                    >
                        <div
                            className="item-ipt d-sm-flex d-none"
                            ref={inputRef}
                        >
                            <Input handler={check} />
                            <button
                                className="border-0"
                                onClick={() => {
                                    handlerClick();
                                }}
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
                                        stroke="#52525B"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                    />
                                    <path
                                        d="M10.5715 10.5716L14 14"
                                        stroke="#52525B"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <Dark handler={check} />
                    </form>
                </div>
                <NavCreate />
                <LinkWallet />
            </nav>
        </header>
    );
}

export default Header;
