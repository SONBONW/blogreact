/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import { DateTimeFormatOptions } from 'intl';
import conFigData from '../../../services/conFixData';
import { useNavigate } from 'react-router-dom';
import { timeLog } from 'console';
import { title } from 'process';

const getFileNameFromPath = (filePath: string) => {
  // Tách đường dẫn thành mảng các phần tử
  const pathArray = filePath.split('\\');
  // Lấy phần tử cuối cùng của mảng (tên file)
  const fileName = pathArray[pathArray.length - 1];
  // Trả về tên file
  return fileName;
};

/*Get Time Now*/
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

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

function MainUpdate() {
  const navigate = useNavigate();
  let url = new URL(window.location.href);
  let id = url.searchParams.get('id');
  const [posts, setPosts] = useState<Post[]>([]);
  const [titleValue, setTitleValue] = useState('');
  const [fileValue, setFileValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  useEffect(() => {
    conFigData
      .getPostId(id!.toString())
      .then((post) => {
        setPosts(post);
        setTitleValue(post.title);
        setContentValue(post.content);
        setFileValue(post.img);
      })
      .catch((error) => {
        console.log('Can not get posts in data!');
      });
  }, [id]);

  const handlerFileImg = useCallback(() => {
    if (fileValue) {
      return require(`../../../asset/img/${fileValue}`);
    }
  }, [fileValue]);

  const handlerUpdate = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      const newPost = {
        title: titleValue,
        img: fileValue,
        time: formatDate(new Date().toString()),
        content: contentValue,
      };

      conFigData
        .updatePost(id!.toString(), newPost)
        .then((post) => {
          setPosts(post);
          alert('Update Correct!');
          navigate('/author');
        })
        .catch((error) => {
          console.log('Can not update post in data!');
        });
    },
    [titleValue, fileValue, contentValue, id, navigate],
  );

  return (
    <main className="container custorm-container px-0 create-post">
      <div className="form-create">
        <form action="#" className="d-flex flex-column">
          <h3>Form Update Post</h3>
          <div>
            <h5>Update Title</h5>
            <label className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Title
              </span>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter Title Post"
                aria-label="Title"
                aria-describedby="basic-addon1"
                value={titleValue}
                onChange={(e) => setTitleValue(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3">
            <h5>Update Image</h5>
            <label htmlFor="post-img" className="form-label form-chosen-file">
              Update File
            </label>
            <br />
            <input
              className="form-control"
              type="file"
              id="post-img"
              multiple
              defaultValue={fileValue}
              onChange={(e) => setFileValue(e.target.value)}
            />
            <img src={handlerFileImg()} alt="" id="show-img" />
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Enter Content"
              id="content"
              style={{ height: '350px' }}
              value={contentValue}
              onChange={(e) => setContentValue(e.target.value)}
            ></textarea>
            <label htmlFor="content">
              <h6>Enter Content</h6>
            </label>
            <span id="charCount">0/10000</span>
          </div>
          <button
            id="submit"
            className="btn btn-primary text-center border-0"
            onClick={handlerUpdate}
          >
            Update Post
          </button>
        </form>
      </div>
    </main>
  );
}

export default MainUpdate;
