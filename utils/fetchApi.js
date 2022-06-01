import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
    headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': '88dd6b5b81msh99bee4aad103a92p1a6ba6jsn033cd9c0f0c4'
        }
    })

    return data;
}