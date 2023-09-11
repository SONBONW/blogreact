import React from 'react';
import InforAuthor from '../../../components/Feature/InforAuthor';
import RenderPost from '../../../components/Function/RenderPost';

function MainAuthor() {
  return (
    <main className="container custorm-container px-0">
      <InforAuthor />
      <section className="list-post">
        <h4 className="title">Latest Post</h4>
        <RenderPost title={'Load More'} />
      </section>
    </main>
  );
}

export default MainAuthor;
