import React, { useState, useRef, useReducer, useCallback } from "react";
import { DateTimeFormatOptions } from "intl";
import conFigData from "../../services/conFigData";
import { useNavigate } from "react-router-dom";

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: DateTimeFormatOptions = {
        month: "long",
        day: "numeric",
        year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
};

const getFileNameFromPath = (filePath: string) => {
    const pathArray = filePath.split("\\");
    const fileName = pathArray[pathArray.length - 1];
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
    SetTitleError = "SET_TITLE_ERROR",
    SetFileError = "SET_FILE_ERROR",
    SetContentError = "SET_CONTENT_ERROR",
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
        titleError: "",
        contentError: "",
        fileError: "",
    };
    const [state, dispatch] = useReducer(errorReducer, initialState);
    const [posts, setPosts] = useState<Post[]>([]);
    const [, setTotal] = useState();
    const navigator = useNavigate();

    const handleSubmit = useCallback(
        async (event: React.FormEvent) => {
            event.preventDefault();

            const titleValue = titleRef.current?.value || "";
            const contentValue = contentRef.current?.value || "";
            const selectedFile = fileInputRef.current?.files?.[0];

            if (!titleValue) {
                dispatch({
                    type: ActionTypes.SetTitleError,
                    payload: "Title is required",
                });
                return;
            }

            if (!selectedFile) {
                dispatch({
                    type: ActionTypes.SetFileError,
                    payload: "File is required",
                });
                return;
            }

            if (!contentValue) {
                dispatch({
                    type: ActionTypes.SetContentError,
                    payload: "Content is required",
                });
                return;
            }

            const link = document.getElementById(
                "post-img",
            ) as HTMLInputElement;
            const replaceLink = getFileNameFromPath(link.value);
            const newPost = {
                title: titleValue,
                img: replaceLink,
                tag: "Technology",
                time: formatDate(new Date().toString()),
                user: {
                    username: "Name",
                    avatar: "img-user3.png",
                },
                content: contentValue,
            };

            try {
                const addedPost = await conFigData.addPost(newPost);
                setPosts([...posts, addedPost]);

                const currentTotal = await conFigData.getCount();

                const newTotal = currentTotal + 1;

                await conFigData.updateCount(newTotal);
                setTotal(newTotal);
                alert("Add Post Correct");
                navigator("/author");
            } catch (error) {
                console.error("Lỗi khi thêm bài viết:", error);
            }
        },
        [navigator, posts],
    );

    const handleFileChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];

            if (file) {
                const fileUrl = URL.createObjectURL(file);
                const imgElement = document.getElementById(
                    "show-img",
                ) as HTMLImageElement;
                imgElement.src = fileUrl;
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [fileInputRef.current?.files?.[0].name],
    );

    return (
        <form action="#" className="d-flex flex-column">
            <h3>Form Create Post</h3>
            <div>
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
                <label
                    htmlFor="post-img"
                    className="form-label form-chosen-file"
                >
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
                <img
                    src={`${fileInputRef}`}
                    alt=""
                    id="show-img"
                    className="img-fluid"
                />
                <span id="errorimg">{state.fileError}</span>
            </div>
            <div className="form-floating">
                <textarea
                    className="form-control"
                    placeholder="Enter Content"
                    id="content"
                    ref={contentRef}
                ></textarea>
                <label htmlFor="content">
                    <h6>Enter Content</h6>
                </label>
                <span id="errorcontent">{state.contentError}</span>
            </div>
            <button
                id="submit"
                className="btn btn-primary border-0"
                onClick={handleSubmit}
            >
                Create Post
                <i>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-send-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    </svg>
                </i>
            </button>
        </form>
    );
}

export default React.memo(AddPost);
