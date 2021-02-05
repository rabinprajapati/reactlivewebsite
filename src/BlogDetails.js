import {useParams,useHistory} from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails=()=>{
    const {id}=useParams();
    const { data: blog, isPending } =useFetch('http://localhost:8000/blogs/' + id);
    const history=useHistory();

    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:"DELETE"
        }).
        then(()=>{
            history.push('/')
        })
    }

    return(
        <>
        {isPending && <h2>Loading...</h2>}
        {blog && (<article>
            <h2>Written by {blog.title}</h2>
            <p>{blog.description}</p>
            <button onClick={handleDelete}>delete</button>
        </article>)}
        </>
    );
}
export default BlogDetails;