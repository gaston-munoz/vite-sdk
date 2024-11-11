import { apiUrl } from "./constants";
import { HttpAdapter } from "./http-adapter";
import { IPost } from "./types";


export async function getPosts(): Promise<IPost[]> {
    try {
        const http = new HttpAdapter(apiUrl);
        const posts = await http.get('/posts');
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error('Error loading posts.');
    }
}