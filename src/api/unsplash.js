import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:'Client-ID JZ38B9Bnpb_rnqsCF3WnLDfx-xmg-mho2W3wVd4oseU'
    }
});