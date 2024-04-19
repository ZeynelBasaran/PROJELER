
import axios from 'axios';

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts" + post_id)

        resolve(data)
    })
}


getPost(1)
    .then((data) => console.log(data))
    .catch((e) => console.log(e))


import axios from 'axios';

(async()=> {
    const {data: users} = await axios("https://jsonplaceholder.typicode.com/posts");

    console.log("users", users)
})()