/* eslint-disable no-template-curly-in-string */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import DeletePost from "./DeletePost";

interface GetDataProps {
    postQuantity: number; // Xác định kiểu dữ liệu của postQuantity là number
}

function GetData({ postQuantity } : GetDataProps) {
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
            .catch(error => {
                setError(error);
            });
    }, [])

    const handleDeletePost = (postId: number) => {
        fetch(`http://localhost:3000/posts/${postId}`, {
          method: 'DELETE',
        })
          .then(() => {
            const updatedPosts = posts.filter((post: any) => post.id !== postId);
            setPosts(updatedPosts);
          })
          .catch(error => {
            console.error('Error deleting post:', error);
          });
    };

    const listPost = posts.slice(0, postQuantity).map((post: any) => {
        const imgSrc = require(`../asset/img/${post.img}`);
        // const avatarSrc = require(`../asset/img/${post.user.avatar}`);
        const id = post.id;
        return (
            <div className="col-lg-4 col-md-6 col-sm-8 col-12" key={post.id}>
                <article className="post" >
                    <DeletePost onDelete={() => handleDeletePost(post.id)} postId={post.id} />
                    <img className="img-fluid" src={imgSrc} alt="" />
                    <span className="tag rounded">{post.tag}</span>
                    <button className="edit rounded">
                        <Link to={`/fix?id=${id}`} className='nav-link'>Edit</Link>
                    </button>
                    <h4>{post.title}</h4>
                    <div className="infor-user">
                        <div className="user">
                            <img className="img-fluid" src={("avatarSrc")} alt="" />
                            <span>{post.user.username}</span>
                        </div>
                        <span className="time">{post.time}</span>
                    </div>
                </article>
            </div>
        )
     })
    return <div className="posts row gx-md-4">{listPost}</div>;
}

export default GetData;