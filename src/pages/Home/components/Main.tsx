import React from 'react';
import InforHighLightHome from '../../../components/Feature/InforHighLightHome';
import Advertisement from '../../../components/Feature/Advertisement';
import RenderPost from '../../../components/Function/RenderPost';

function Main() {
  return (
    <main className="container custorm-container px-0">
      <InforHighLightHome />

      <Advertisement />

      <section className="list-post">
        <h4 className="title">Latest Post</h4>
        <RenderPost title={'View All Post'} />
      </section>
      <Advertisement />
    </main>
  );
}

export default Main;
