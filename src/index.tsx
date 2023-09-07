import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './component/Home';
import Blog from './component/Blog';
import reportWebVitals from './reportWebVitals';
import Single from './component/Single';
import Author from './component/Author';
import Create from './component/Create';
import Fix from './component/Fix';
import './component/asset/style/layout.css'
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';




const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home/*" element={<Home />} />
        <Route path="/blog/*" element={<Blog />} />
        <Route path="/single/*" element={<Single />} />
        <Route path="/author/*" element={<Author />} />
        <Route path="/create/*" element={<Create />} />
        <Route path="/fix/*" element={<Fix />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
