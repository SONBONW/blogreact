import React, { useState, useEffect, useMemo, useCallback } from "react";
import { DateTimeFormatOptions } from "intl";
import conFigData from "../../../services/conFigData";
import { useNavigate } from "react-router-dom";

/*Get Time Now*/
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

function MainUpdate() {
    const navigate = useNavigate();
    let url = new URL(window.location.href);
    let id = url.searchParams.get("id");
    const [titleValue, setTitleValue] = useState("");
    const [fileValue, setFileValue] = useState("");
    const [contentValue, setContentValue] = useState("");
    useEffect(() => {
        const getPost = async () => {
            try {
                const infor = await conFigData.getPostId(id!.toString());
                setTitleValue(infor.title);
                setContentValue(infor.content);
                setFileValue(infor.img);
                console.log("call use");
            } catch (error) {
                console.log("Error");
            }
        };
        getPost();
    }, [id]);

    const imageUrl = useMemo(() => {
        if (fileValue) {
            return require(
                `../../../asset/img/${getFileNameFromPath(fileValue)}`,
            );
        }
        return getFileNameFromPath(fileValue);
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
                await conFigData.updatePost(id!.toString(), newPost);
                alert("Update Correct!");
                navigate("/author");
            } catch (error) {
                console.error("Lỗi khi update bài viết:", error);
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
                                onChange={(e) => setTitleValue(e.target.value)}
                                value={titleValue}
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
                            onChange={(e) => setFileValue(e.target.value)}
                        />
                        <img src={imageUrl} alt="" id="show-img" />
                    </div>
                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            placeholder="Enter Content"
                            id="content"
                            value={contentValue}
                            onChange={(e) => setContentValue(e.target.value)}
                        ></textarea>
                        <label htmlFor="content">
                            <h6>Enter Content</h6>
                        </label>
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
