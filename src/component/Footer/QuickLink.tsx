import React from "react";
import {Link } from 'react-router-dom'

function QuickLink() {
    return (
        <div className="quick-link">
                    <h5>Quick Link</h5>
                    <ul>
                        <li><Link to={""}>Home</Link></li>
                        <li><Link to={""}>About</Link></li>
                        <li><Link to={""}>Blog</Link></li>
                        <li><Link to={""}>Archived</Link></li>
                        <li><Link to={""}>Author</Link></li>
                        <li><Link to={""}>Contact</Link></li>
                    </ul>
                </div>
    );
}

export default QuickLink;