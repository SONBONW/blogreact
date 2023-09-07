import React from "react";
import InforAuthor from "./InforAuthor";
import RenderPost from "../Function/RenderPost";

function MainAuthor() {
    return (
         <main className="container custorm-container px-0">
        <InforAuthor />
        <section className="list-post">
            <h4 className="title">Latest Post</h4>
                <div className="posts row gx-md-4 custorm-row">
                    <RenderPost />
            </div>
            <button className=" view rounded d-flex justify-content-center align-items-center">
                View All Post
            </button>
        </section>
    </main>
    );
}

export default MainAuthor;