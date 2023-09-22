import axios from 'axios';

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

interface updatePost {
    title: string;
    img: string;
    time: string;
    content: string;
}
const url = 'http://localhost:3000/';
const controller = new AbortController();

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const conFigData = {
    getPost: async (start: number, end: number) => {
        try {
            const response = await axios.get(
                `${url}posts?_start=${start}&_end=${end}`,
                {
                    cancelToken: source.token,
                    signal: controller.signal,
                },
            );
            return response.data;
        } catch (error) {
            console.log('Unable to fetch data');
        }
    },
    getPostId: async (id: string) => {
        try {
            const response = await axios.get(`${url}posts/${id}`, {
                cancelToken: source.token,
                signal: controller.signal,
            });
            return response.data;
        } catch (error) {
            console.log('Unable to fetch data');
        }
    },
    addPost: async (newPost: Post) => {
        try {
            const response = await axios.post(`${url}posts`, newPost, {
                cancelToken: source.token,
            });
            return response.data;
        } catch {
            console.log('Unable to add post');
        }
    },
    deletePost: async (id: string) => {
        try {
            const response = await axios.delete(`${url}posts/${id}`, {
                cancelToken: source.token,
            });
            return response.data;
        } catch (error) {
            console.log('Unable to delete post');
        }
    },
    updatePost: async (id: string, updatePost: updatePost) => {
        try {
            const responsive = await axios.patch(
                `${url}posts/${id}`,
                updatePost,
                {
                    cancelToken: source.token,
                },
            );
            return responsive.data;
        } catch (error) {
            console.log('Unable to update post');
        }
    },
    getCount: async () => {
        try {
            const response = await axios.get(`${url}total`, {
                cancelToken: source.token,
                signal: controller.signal,
            });
            const totalCount = response.data.count;
            return totalCount;
        } catch {
            console.log('Can not get total!');
        }
    },
    updateCount: async (newCount: number) => {
        try {
            const response = await axios.patch(
                `${url}total`,
                {
                    count: newCount,
                },
                {
                    cancelToken: source.token,
                },
            );
            return response.data;
        } catch {
            console.log('Can not update count in total!');
        }
    },
};

export default conFigData;
