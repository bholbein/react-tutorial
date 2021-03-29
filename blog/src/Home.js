import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // runs every render
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(response => {
                // console.log(response)
                if(!response.ok) {
                    throw Error('Could not fetch data for that resource')
                };
                return response.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                setIsPending(false);
                setError(error.message);
            })
    }, []);

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading ...</div> }
            { blogs && <BlogList blogs={blogs} title="All blogs" /> }
        </div>
    );
}

export default Home;