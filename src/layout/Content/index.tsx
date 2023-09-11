import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import Single from '../../pages/Single';
import Author from '../../pages/Author';
import Create from '../../pages/Create';
import Fix from '../../pages/Fix';

const DefautRouter = () => {
  return <Navigate to="/home" />;
};

const Content: React.FunctionComponent = () => {
  return (
    <Routes>
      {/* defaut route */}
      <Route path="/*" element={<DefautRouter />} />
      <Route path="/home/*" element={<Home />} />
      <Route path="/blog/*" element={<Blog />} />
      <Route path="/single/*" element={<Single />} />
      <Route path="/author/*" element={<Author />} />
      <Route path="/create/*" element={<Create />} />
      <Route path="/fix/*" element={<Fix />} />
      <Route path="/contact/*" element={<h1> Have not main page for Contact </h1>} />
    </Routes>
  );
};

export default Content;
