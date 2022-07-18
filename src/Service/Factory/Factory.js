import PostRepository from "../PostRepository/PostRepository";

const repositories = {
    posts: PostRepository
}

const RepositoryFactory = {
    get: name => repositories[name],
    createPost: postData => repositories[postData],
}

export default RepositoryFactory