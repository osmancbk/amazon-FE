import axios from 'axios';

export const fetchData = async (path) => {
    try {
        const response = await axios.get(path)
        return response?.data?.products;
    } catch (err) {
        console.log(err)
    }
};

