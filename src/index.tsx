import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import reportWebVitals from "./reportWebVitals";
import "./asset/style/layout.css";
import "./asset/style/media-screen.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Content from "./layout/Content";
import Profile from "./configs/Config";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Profile>
                <Header />
                <Content />
                <Footer />
            </Profile>
        </BrowserRouter>
    </React.StrictMode>,
);

reportWebVitals();
