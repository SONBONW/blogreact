import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { DateTimeFormatOptions } from 'intl';
import conFigData from '../../../services/conFigData';
import { useNavigate } from 'react-router-dom';

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
    const [, setPosts] = useState<Post[]>([]);
    const [titleValue, setTitleValue] = useState('');
    const [fileValue, setFileValue] = useState('');
    const [contentValue, setContentValue] = useState('');
    useEffect(() => {
        const getPost = async () => {
            try {
                const infor = await conFigData.getPostId(id!.toString());
                setPosts(infor);
                setTitleValue(infor.title);
                setContentValue(infor.content);
                setFileValue(infor.img);
                getPost();
            } catch (error) {
                console.log('Error');
            }
        };
        getPost();
    }, [id]);

    const handlerFileImg = useMemo(() => {
        if (fileValue) {
            return require(`../../../asset/img/${fileValue}`);
        }
    }, [fileValue]);

    const handlerUpdate = useCallback(
        async (event: React.FormEvent) => {
            event.preventDefault();
            const newPost = {
                title: titleValue,
                img: fileValue,
                time: formatDate(new Date().toString()),
                content: contentValue,
            };
            try {
                const updatePost = await conFigData.updatePost(
                    id!.toString(),
                    newPost,
                );
                setPosts(updatePost);
                alert('Update Correct!');
                navigate('/author');
            } catch (error) {
                console.error('Lỗi khi update bài viết:', error);
            }
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
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
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
                        <label
                            htmlFor="post-img"
                            className="form-label form-chosen-file"
                        >
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
                        <img src={handlerFileImg} alt="" id="show-img" />
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

export default React.memo(MainUpdate);
