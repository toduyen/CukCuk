import Repository from "../Repository/Repository";
const resource = "/posts"
export default {
    get(){
        return Repository.get(`${resource}`);
    },
    createPost(payload){
        return Repository.post(`${resource}`,payload)
    },
    updatePost(postId , payload){
        return Repository.put(`${resource}/${postId}`,payload)
    },
    deletePost(postId){
        return Repository.delete(`${resource}/${postId}`)
    }
}