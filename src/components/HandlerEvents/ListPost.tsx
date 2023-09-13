/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeletePost from '../ButtonDelete';
import GetPost from './InforPost';
import conFigData from '../../services/conFixData';

interface getTitle {
  title: string;
}

function RenderPost({ title }: getTitle) {
  const [postStart, setPostStart] = useState(0);
  const [postEnd, setPostEnd] = useState(3);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    conFigData
      .getCount()
      .then((total) => {
        setTotal(total);
      })
      .catch((error) => {
        console.log('Can not get count in total from data');
      });
  });

  const handlerClickViewPost = () => {
    // if (postEnd === total){
    //   setPostStart(0);
    //   setPostEnd(3);
    // }else {
    //    setPostStart(postStart + 3);
    //     setPostEnd(postEnd + 3);
    // }
    if (postEnd + 3 <= total) {
      // Kiểm tra xem có thể hiển thị thêm 3 bài viết không
      setPostStart((postStart) => postStart + 3);
      setPostEnd((postEnd) => postEnd + 3);
    } else {
      // Nếu không thể hiển thị thêm 3 bài viết, ẩn nút "Xem thêm"
      if (total - postEnd > 0) {
        setPostStart((postStart) => postEnd);
        setPostEnd((postEnd) => total);
      } else {
        setPostStart(0);
        setPostEnd(3); // Hiển thị tất cả các bài viết còn lại
      }
    }
  };

  return (
    <>
      <div className="posts row gx-md-4">
        <GetPost postStart={postStart} postEnd={postEnd} />
      </div>
      {/* <button
        className="view rounded d-flex justify-content-center align-items-center"
        onClick={handlerClickViewPost}
      >
        {title}
      </button> */}
      {postEnd < total ? ( // Kiểm tra xem có hiển thị nút "Xem thêm" hay không
        <button
          className="view rounded d-flex justify-content-center align-items-center"
          onClick={handlerClickViewPost}
        >
          {title}
        </button>
      ) : null}
    </>
  );
}

export default RenderPost;
