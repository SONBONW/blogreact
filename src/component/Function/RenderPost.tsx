/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DeletePost from './DeletePost';
import '../asset/style/layout.css'
import GetData from './GetData';

interface getTitle {
  title : string
}

function RenderPost({title} : getTitle) {
  const [postShow, setPostShow] = useState(9);
  const handlerClickViewPost = () => {
    setPostShow(postShow + 9);
  }

  return (
    <>
      <div className="posts row gx-md-4">
        <GetData postQuantity={postShow} />
      </div>
      <button className=" view rounded d-flex justify-content-center align-items-center" onClick={handlerClickViewPost}>
                {title}
      </button>
    </>
  );
    
}

export default RenderPost;

