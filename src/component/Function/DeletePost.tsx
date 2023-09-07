/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { error } from 'console';


interface DeleteProps {
  onDelete: () => void;
  postId: number; // Thêm prop postId để truyền id bài viết cần xóa
}

const DeletePost: React.FC<DeleteProps> = ({ onDelete }) => {
const [posts, setPosts] = useState([]);
  const handleDeletePost = (postId: number) => {
    fetch(`http://localhost:3000/posts/${postId}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedPosts = posts.filter((post: any) => post.id !== postId);
        setPosts(updatedPosts);
        onDelete();
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
};

  // const updateTotalCount = () => {
  //   fetch('http://localhost:3000/total')
  //     .then(res => res.json())
  //     .then(total => {
  //       const newTotal = total.count - 1;
  //       fetch('http://localhost:3000/total', {
  //         method: 'PUT',
  //         body: JSON.stringify({ count: newTotal }),
  //         headers: {
  //         'Content-Type': 'application/json',
  //         },
  //       })
  //         .then(res => res.json())
  //         .then(() => {
  //         onDelete(); // Gọi hàm onDelete khi cập nhật thành công
  //         })
  //       })
  //     .catch(error => {
  //       console.error('Error updating total count:', error);
  //   })
    
  // };


  return (
      <button
          type="button"
          className="btn-close btn-delete"
          aria-label="Close"
          onClick={onDelete}>
      </button>
  );
}
export default DeletePost;