
import { makePost } from './post.js';

async function fetchData() {
    let response = await fetch('data.json');
    let posts = await response.json();

    posts.forEach(post => {
        makePost(post);
    });
}

fetchData();
