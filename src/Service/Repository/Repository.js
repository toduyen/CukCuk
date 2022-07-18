import axios from "axios"

// const baseUrl = `${baseDomain}/posts`

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})