/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useEffect,
  useState,
  useRef,
  useReducer,
  useCallback,
} from 'react';
import { DateTimeFormatOptions } from 'intl';
import conFigData from '../../services/conFixData';
import { useNavigate } from 'react-router-dom';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

const getFileNameFromPath = (filePath: string) => {
  // Tách đường dẫn thành mảng các phần tử
  const pathArray = filePath.split('\\');
  // Lấy phần tử cuối cùng của mảng (tên file)
  const fileName = pathArray[pathArray.length - 1];
  // Trả về tên file
  return fileName;
};

interface Post {
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

interface InputError {
  titleError: string;
  fileError: string;
  contentError: string;
}

enum ActionTypes {
  SetTitleError = 'SET_TITLE_ERROR',
  SetFileError = 'SET_FILE_ERROR',
  SetContentError = 'SET_CONTENT_ERROR',
}

const errorReducer = (
  state: InputError,
  action: { type: ActionTypes; payload?: any },
) => {
  switch (action.type) {
    case ActionTypes.SetTitleError:
      return { ...state, titleError: action.payload };
    case ActionTypes.SetFileError:
      return { ...state, fileError: action.payload };
    case ActionTypes.SetContentError:
      return { ...state, contentError: action.payload };
    default:
      return state;
  }
};

function AddPost() {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  const initialState: InputError = {
    titleError: '',
    contentError: '',
    fileError: '',
  };
  const [state, dispatch] = useReducer(errorReducer, initialState);
  const [posts, setPosts] = useState<Post[]>([]);
  const [total, setTotal] = useState();
  const navigator = useNavigate();

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      const titleValue = titleRef.current?.value || '';
      const contentValue = contentRef.current?.value || '';
      const selectedFile = fileInputRef.current?.files?.[0];

      if (!titleValue) {
        dispatch({
          type: ActionTypes.SetTitleError,
          payload: 'Title is required',
        });
        return;
      }

      if (!selectedFile) {
        dispatch({
          type: ActionTypes.SetFileError,
          payload: 'File is required',
        });
        return;
      }

      if (!contentValue) {
        dispatch({
          type: ActionTypes.SetContentError,
          payload: 'Content is required',
        });
        return;
      }

      const link = document.getElementById('post-img') as HTMLInputElement;
      const replaceLink = getFileNameFromPath(link.value);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const newPost = {
        title: titleValue,
        img: replaceLink,
        tag: 'Technology',
        time: formatDate(new Date().toString()),
        user: {
          username: 'Name',
          avatar: 'img-user3.png',
        },
        content: contentValue,
      };

      try {
        // Gọi hàm addPost từ conFigDataPost để thêm bài viết
        const addedPost = await conFigData.addPost(newPost);
        // Cập nhật danh sách bài viết sau khi thêm
        setPosts([...posts, addedPost]);

        // Gọi hàm getCount từ conFigDataTotal để lấy giá trị total hiện tại
        const currentTotal = await conFigData.getCount();

        // Cập nhật count bằng cách tăng thêm 1
        const newTotal = currentTotal + 1;

        // Gọi hàm updateCount từ conFigDataTotal để cập nhật giá trị count mới
        await conFigData.updateCount(newTotal);
        setTotal(newTotal);
        alert('Add Post Correct');
        navigator('/author');
      } catch (error) {
        console.error('Lỗi khi thêm bài viết:', error);
      }
    },
    [navigator, posts, setPosts, setTotal],
  );

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (file) {
        const fileUrl = URL.createObjectURL(file);
        const imgElement = document.getElementById(
          'show-img',
        ) as HTMLImageElement;
        imgElement.src = fileUrl;
      }
    },
    [],
  );

  return (
    <form action="#" className="d-flex flex-column">
      <h3>Form Create Post</h3>
      <div>
        <h5>Creactor Title</h5>
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
            ref={titleRef}
          />
        </label>
        <span id="errortitle">{state.titleError}</span>
      </div>
      <div className="mb-3">
        <h5>Post Image</h5>
        <label htmlFor="post-img" className="form-label form-chosen-file">
          Chosen File
        </label>
        <input
          className="form-control"
          type="file"
          id="post-img"
          onChange={handleFileChange}
          ref={fileInputRef}
          multiple
        />
        <br />
        <img src={`${fileInputRef}`} alt="" id="show-img" />
        <span id="errorimg">{state.fileError}</span>
      </div>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Enter Content"
          id="content"
          style={{ height: '350px' }}
          ref={contentRef}
        ></textarea>
        <label htmlFor="content">
          <h6>Enter Content</h6>
        </label>
        <span id="errorcontent">{state.contentError}</span>
        <span id="charCount">0/10000</span>
      </div>
      <button
        id="submit"
        className="btn btn-primary text-center border-0"
        onClick={handleSubmit}
      >
        Create Post
      </button>
    </form>
  );
}

export default React.memo(AddPost);
