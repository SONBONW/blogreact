import axios from 'axios';

const conFigDataTotal = {
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

export default conFigDataTotal;
