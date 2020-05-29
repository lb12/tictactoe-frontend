import Axios from 'axios';

const apiUrl = 'https://localhost:3001/api';

export const getPlay = async (board, isPlayerX) => {
    const data = { board, isBotX: !isPlayerX };

    let res = { error: false };
    try {
        const response = await Axios.post(`${apiUrl}/plays`, data);

        if (response.status === 200)
            res = { ...res, ...response.data };

    } catch (error) {
        const isApiOffline = error.response === undefined;
        if (isApiOffline) {
            return { error: true, message: error.message };
        }
        const errorMessage = error.response.data.data;        
        res = { error: true, message: errorMessage };
    }
    return res;
};