
import {Link} from 'react-router-dom';

const BlogList=({blogs,title})=>{
    // const blogs=props.blogs;
    // const title=props.title;

    return(
        <div className='bloglist'>
            <h2>{title}</h2>
               {blogs.map((blog)=>{
                    return(<div className='blogpreview' key={blog.id}>
                                <Link to={`/blog/${blog.id}`}>
                                <h2 className='title'>{blog.title}</h2>
                                <p className='description'>{blog.description}</p>
                                </Link>
                            </div>
                            );
                })}
        </div>
    );

}
export default BlogList;