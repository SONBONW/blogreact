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

const conFigData = {
  getPost: async () => {
    try {
      const response = await axios.get('http://localhost:3000/posts');
      return response.data;
    } catch (error) {
      throw new Error('Unable to fetch data');
    }
  },
  addPost: async (newPost: Post) => {
    try {
      const response = await axios.post('http://localhost:3000/posts', newPost);
      return response.data;
    } catch {
      throw new Error('Unable to add post');
    }
  },
  deletePost: async (id: string) => {
    try {
      const response = await axios.delete(`http://localhost:3000/posts/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Unable to delete post');
    }
  },
  updatePost: async (id: string, updatePost: Post) => {
    try {
      const responsive = await axios.patch(
        `http://localhost:3000/posts/${id}`,
        updatePost,
      );
      return responsive.data;
    } catch (error) {
      throw new Error('Unable to update post');
    }
  },
  getCount: async () => {
    try {
      const response = await axios.get('http://localhost:3000/total');
      const totalCount = response.data.count;
      return totalCount;
    } catch {
      throw new Error('Can not get total!');
    }
  },
  updateCount: async (newCount: number) => {
    try {
      const response = await axios.patch('http://localhost:3000/total', {
        count: newCount,
      });
      return response.data;
    } catch {
      throw new Error('Can not update count in total!');
    }
  },
};

export default conFigData;
