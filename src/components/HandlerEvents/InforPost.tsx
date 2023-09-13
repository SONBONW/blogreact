/* eslint-disable no-template-curly-in-string */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeletePost from '../ButtonDelete';
import conFigData from '../../services/conFixData';

interface GetDataProps {
  postQuantity: number; // Xác định kiểu dữ liệu của postQuantity là number
}

interface Post {
  id: number;
  img: string;
  tag: string;
  title: string;
  time: string;
  user: {
    username: string;
    avatar: string;
  };
  content: string;
}

function InforPost({ postQuantity }: GetDataProps) {
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState<Post[] | undefined>();

  useEffect(() => {
    // Sử dụng conFigData để lấy danh sách bài viết
    conFigData
      .getPost()
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const handleDeletePost = async (postId: number) => {
    try {
      // Gọi component DeletePost để xóa bài viết
      // Sau khi xóa thành công, component này sẽ gọi onDelete để thông báo
      // Cập nhật danh sách bài viết sau khi xóa
      setPosts(posts!.filter((post: any) => post.id !== postId));
    } catch {
      console.log('Can not delete post');
    }
  };

  const listPost = posts ? posts.slice(0, postQuantity).map((post: any) => {
    const imgSrc = require(`../../asset/img/${post.img}`);
    const avatarSrc = require(`../../asset/img/${post.user.avatar}`);

    return (
      <div className="col-lg-4 col-md-6 col-sm-8 col-12" key={post.id}>
        <article className="post">
          <DeletePost
            onDeleteSuccess={() => handleDeletePost(post.id)}
            postId={post.id}
          />
          <img className="img-fluid" src={imgSrc} alt="" />
          <span className="tag rounded">{post.tag}</span>
          <button className="edit rounded">
            <Link to={`/fix?id=${post.id}`} className="nav-link">
              Edit
            </Link>
          </button>
          <h4>{post.title}</h4>
          <div className="infor-user">
            <div className="user">
              <img className="img-fluid" src={avatarSrc} alt="" />
              <span>{post.user.username}</span>
            </div>
            <span className="time">{post.time}</span>
          </div>
        </article>
      </div>
    );
  }) : [];
  return <div className="posts row gx-md-4">{listPost}</div>;
}

export default InforPost;
