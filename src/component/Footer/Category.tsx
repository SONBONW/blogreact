import React from "react";
import {Link} from 'react-router-dom'

function Category() {
    return (
         <div className="category">
                    <h5>Category</h5>
                    <ul>
                        <li><Link to={''}>Lifestyle</Link></li>
                        <li><Link to={''}>Technology</Link></li>
                        <li><Link to={''}>Travel</Link></li>
                        <li><Link to={''}>Business</Link></li>
                        <li><Link to={''}>Economy</Link></li>
                        <li><Link to={''}>Sports</Link></li>
                    </ul>
                </div>
    );
}

export default Category;