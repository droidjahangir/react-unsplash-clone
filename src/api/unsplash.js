import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID 2kxp-ZXlBbMdaVaiZ704pLN7oa4BnB9qawhBaqOAI2w'
    }
});
