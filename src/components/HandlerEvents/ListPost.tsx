/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DeletePost from '../ButtonDelete';
import GetPost from './InforPost';

interface getTitle {
  title: string;
}

function RenderPost({ title }: getTitle) {
  const [postShow, setPostShow] = useState(9);
  const handlerClickViewPost = () => {
    setPostShow(postShow + 9);
  };

  return (
    <>
      <div className="posts row gx-md-4">
        <GetPost postQuantity={postShow} />
      </div>
      <button
        className="view rounded d-flex justify-content-center align-items-center"
        onClick={handlerClickViewPost}
      >
        {title}
      </button>
    </>
  );
}

export default RenderPost;
