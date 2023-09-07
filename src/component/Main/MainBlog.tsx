import React from "react";
import Advertisement from "./Advertisement";
import InforHighLightBlog from "./InforHighLightBlog";
import RenderPost from "../Function/RenderPost";
import {Link} from 'react-router-dom'


function MainBlog() {
    return (
        <main className="container custorm-container px-0">
        <section className="pagetitle text-center">
            <h4>Page TItle</h4>
            <p>
                <span><Link to = '/home' >Home</Link></span>
                <span><Link to = '/link' >Link One</Link></span>
            </p>
        </section>
            <InforHighLightBlog />
        <section className="list-post">
                <RenderPost title = {"Load More"}/>
        </section>
        <Advertisement />
    </main>
    );
}

export default MainBlog;