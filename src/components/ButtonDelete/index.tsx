import React, { useState } from 'react';
import conFigData from '../../services/conFixData';

interface DeleteProps {
  onDeleteSuccess: () => void;
  postId: number;
}

const DeletePost: React.FC<DeleteProps> = (props) => {
  const { onDeleteSuccess, postId } = props;
  const [total, setTotal] = useState<number | undefined>(0);

  const handlerDeletePost = async (postId: number) => {
    try {
      await conFigData.deletePost(postId.toString());

      // Gọi hàm updateCount từ conFigDataTotal để cập nhật giá trị count mới
      if (total !== undefined) {
        const total = await conFigData.getCount();
        const newCount = total - 1;
        await conFigData.updateCount(newCount);
        setTotal(newCount);
      }
      onDeleteSuccess();
    } catch {
      console.log('Can not delete post');
    }
  };

  return (
    <button
      type="button"
      className="btn-close btn-delete"
      aria-label="Close"
      onClick={() => handlerDeletePost(postId)}
    ></button>
  );
};

export default DeletePost;
