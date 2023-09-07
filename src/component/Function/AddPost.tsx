/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { DateTimeFormatOptions } from 'intl';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options : DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const getFileNameFromPath = (filePath: string) => {
  // Tách đường dẫn thành mảng các phần tử
  const pathArray = filePath.split("\\");
  // Lấy phần tử cuối cùng của mảng (tên file)
  const fileName = pathArray[pathArray.length - 1];
  // Trả về tên file
  return fileName;
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



function AddPost() {
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [titleError, setTitleError] = useState("");
    const [fileError, setFileError] = useState("");
    const [contentError, setContentError] = useState("");
    const [posts, setPosts] = useState<Post[]>([]);

    

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
         if (!title) {
        setTitleError("Title is required");
        return;
    }

    if (!selectedFile) {
        setFileError("File is required");
        return;
    }

    if (!content) {
        setContentError("Content is required");
        return;
    }
        const link = document.getElementById('post-img') as HTMLInputElement;
        const replaceLink = getFileNameFromPath(link.value);
        const data = {
            title: title,
            img: replaceLink,
            tag: 'Technology',
            time: formatDate(new Date().toString()),
            user: {
                username: 'Name',
                avatar: 'img-user3.png',
            },
            content: content
        };


        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(newPosts => {
                setPosts([...posts, newPosts])
                setContent('');
                setTitle('');
                let src = document.getElementById('show-img') as HTMLInputElement;
                src.src = '';
        })
        .catch(error => {
            console.error('Error adding post:', error);
        });
    };

    
    const handleTitleChange = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        setTitle(value);
        setTitleError(value ? "" : "Title is required");
    };

    const handleContentChange = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        setContent(value);
        setContentError(value ? "" : "Content is required");
    };
    
   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
       setSelectedFile(file || null);
       console.log(file);

    if (file) {
        const fileUrl = URL.createObjectURL(file);
        console.log(fileUrl);
        const imgElement = document.getElementById("show-img") as HTMLImageElement;
        imgElement.src = fileUrl;
    }
};

    
    return (
        <form action="#" className="d-flex flex-column">
                    <h3>Form Create Post</h3>
                    <div>
                        <h5>Creactor Title</h5>
                        <label className="input-group mb-3">
                             <span className="input-group-text" id="basic-addon1">Title</span>
                            <input type="text" className="form-control" id="title" placeholder="Enter Title Post"
                                aria-label="Title" aria-describedby="basic-addon1"  value={title} onChange={handleTitleChange}/>
                        </label>
                <span id="errortitle">{titleError}</span>
                    </div>
                    <div className="mb-3">
                        <h5>Post Image</h5>
                        <label htmlFor="post-img" className="form-label form-chosen-file">
                            Chosen File
                        </label>
                        <input className="form-control" type="file" id="post-img" onChange={handleFileChange} multiple/>
                        <img src="" alt="" id="show-img" />
                <span id="errorimg">{fileError}</span>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Enter Content" id="content"
                            style={{height: '350px'}} value={content} onChange={handleContentChange}></textarea>
                        <label htmlFor="content">
                            <h6>Enter Content</h6>
                        </label>
                        <span id="errorcontent">{contentError}</span>
                        <span id="charCount">0/10000</span>
                    </div>
                    <button id="submit" className="btn btn-primary text-center border-0" onClick={handleSubmit}>Create Post</button>
        </form>
    );
}

export default AddPost;