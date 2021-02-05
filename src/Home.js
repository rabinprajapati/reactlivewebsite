import BlogList from './BlogList';
import useFetch from './useFetch';

const Home=()=>{

   const {data:blogs,isPending}=useFetch(' http://localhost:8000/blogs')

    


    return(
        <div className='home'>
            {isPending && <p>Loading</p>}
           {blogs && <BlogList blogs={blogs} title='All Todos'/>}

            
        </div>
    );
}
export default Home;