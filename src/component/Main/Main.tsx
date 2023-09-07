import React from 'react';
import '../asset/style/layout.css';
import '../asset/style/media-screen.css'
import InforHighLightHome from './InforHighLightHome';
import Advertisement from './Advertisement';
import RenderPost from '../Function/RenderPost';


function Main() {
    return (
    <main className="container custorm-container px-0">
            <InforHighLightHome />

            <Advertisement />

        <section className="list-post">
            <RenderPost />
        </section>
        <Advertisement />
    </main>
    );
}

export default Main;