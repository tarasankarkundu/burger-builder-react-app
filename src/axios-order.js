import axios from 'axios'

const orderInstance = axios.create({
    baseURL: 'https://burger-builder-auth.firebaseio.com/'
})

export default orderInstance;