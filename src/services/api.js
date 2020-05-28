import Axios from 'axios';

const apiURl = 'https://localhost:3001/api';

export const getPlay = async (board, isPlayerX) => {
    const data = { board, isBotX: !isPlayerX };

    let res;
    try {
        res = await Axios.post(`${apiURl}/plays`, data);

        if (res.status === 200)
            res  = res.data;

    } catch (error) {
        res = { message: error };
    }

    console.log(res);
    return res;
};