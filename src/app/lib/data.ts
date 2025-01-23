import api from "./api";

export default async function getUser() {
    const data = await api.get('/');
    console.log('data : ', data.data);
}