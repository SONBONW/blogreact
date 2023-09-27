import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import DeletePost from '../ButtonDelete';
import conFigData from '../../services/conFigData';

interface GetDataProps {
    postEnd: number;
    postStart: number; // Xác định kiểu dữ liệu của postQuantity là number
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

function InforPost({ postStart, postEnd }: GetDataProps) {
    const [posts, setPosts] = useState<Post[]>();

    useEffect(() => {
        // Sử dụng conFigData để lấy danh sách bài viết
        const fetchData = async () => {
            try {
                const posts = await conFigData.getPost(postStart, postEnd);
                setPosts(posts);
            } catch (error) {
                console.log('Error');
            }
        };

        fetchData();
    }, [postStart, postEnd]);

    useEffect(() => {}, [posts]);

    const handleDeletePost = useCallback(
        async (postId: number) => {
            try {
                if (!posts) {
                    return;
                }
                // Gọi component DeletePost để xóa bài viết
                // Sau khi xóa thành công, component này sẽ gọi onDelete để thông báo
                // Cập nhật danh sách bài viết sau khi xóa
                setPosts(posts.filter((post: Post) => post.id !== postId));
            } catch {
                console.log('Can not delete post');
            }
        },
        [posts],
    );
    const listPost = posts
        ? posts.map((post: Post) => {
              const imgSrc = require(`../../asset/img/${post.img}`);
              const avatarSrc = require(`../../asset/img/${post.user.avatar}`);
              return (
                  <div
                      className="col-lg-4 col-md-6 col-sm-10 col-12"
                      key={post.id}
                  >
                      <article className="post">
                          <img
                              className="img-fluid img-post"
                              src={imgSrc}
                              alt=""
                          />
                          <span className="tag rounded">{post.tag}</span>
                          <div className="edit rounded dropdown">
                              <Link
                                  className="nav-link dropdown-toggle"
                                  to="#"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                              >
                                  Action
                              </Link>
                              <ul className="dropdown-menu">
                                  <li>
                                      <DeletePost
                                          onDeleteSuccess={() =>
                                              handleDeletePost(post.id)
                                          }
                                          postId={post.id}
                                      />
                                  </li>
                                  <li>
                                      <Link
                                          to={`/fix?id=${post.id}`}
                                          className="dropdown-item"
                                      >
                                          Edit
                                      </Link>
                                  </li>
                              </ul>
                          </div>
                          <h4>{post.title}</h4>
                          <div className="infor-user infor-list">
                              <div className="user">
                                  <img
                                      className="img-fluid"
                                      src={avatarSrc}
                                      alt=""
                                  />
                                  <span>{post.user.username}</span>
                              </div>
                              <span className="time">{post.time}</span>
                          </div>
                      </article>
                  </div>
              );
          })
        : [];
    return <>{listPost}</>;
}

export default React.memo(InforPost);
