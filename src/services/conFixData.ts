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

const conFigData = {
  getPost: async (start: number, end: number) => {
    try {
      const response = await axios.get(`${url}posts?_start=${start}&_end=${end}`);
      return response.data;
    } catch (error) {
      throw new Error('Unable to fetch data');
    }
  },
  getPostId: async (id: string) => {
     try {
      const response = await axios.get(`${url}posts/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Unable to fetch data');
    }
  },
  addPost: async (newPost: Post) => {
    try {
      const response = await axios.post(`${url}posts`, newPost);
      return response.data;
    } catch {
      throw new Error('Unable to add post');
    }
  },
  deletePost: async (id: string) => {
    try {
      const response = await axios.delete(`${url}posts/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Unable to delete post');
    }
  },
  updatePost: async (id: string, updatePost: updatePost) => {
    try {
      const responsive = await axios.patch(
        `${url}posts/${id}`,
        updatePost,
      );
      return responsive.data;
    } catch (error) {
      throw new Error('Unable to update post');
    }
  },
  getCount: async () => {
    try {
      const response = await axios.get(`${url}total`);
      const totalCount = response.data.count;
      return totalCount;
    } catch {
      throw new Error('Can not get total!');
    }
  },
  updateCount: async (newCount: number) => {
    try {
      const response = await axios.patch(`${url}total`, {
        count: newCount,
      });
      return response.data;
    } catch {
      throw new Error('Can not update count in total!');
    }
  },
};

export default conFigData;
