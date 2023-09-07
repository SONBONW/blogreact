import React from "react";
import InforAuthor from "./InforAuthor";
import RenderPost from "../Function/RenderPost";

function MainAuthor() {
    return (
         <main className="container custorm-container px-0">
        <InforAuthor />
            <section className="list-post">
                <h4 className="title">Latest Post</h4>
           <RenderPost title = {""}/>
        </section>
    </main>
    );
}

export default MainAuthor;