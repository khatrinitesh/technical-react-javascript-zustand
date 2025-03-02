import { PostProps } from "../interface";

const fetchPosts = async ():Promise<PostProps[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(!response.ok){
        throw new Error('network response was ok')
    }
    return response.json();
}

export default fetchPosts;