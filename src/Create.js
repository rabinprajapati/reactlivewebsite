import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Create=()=>{
    const [title,setTitle]=useState();
    const [description,setDescription]=useState();
    const history=useHistory();

    const handleSubmit=(e)=>{
        const blog={title,description};
        e.preventDefault();
        fetch('  http://localhost:8000/blogs',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
            
        }).then(
            history.push('/')
        )
    }

    return(<>
        <h1>Add todo list</h1>
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input 
                type="text"
                required
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                />
            <label>Description:</label>
            <textarea 
                required
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}}>
            </textarea>
            <button type="submit">add</button>
        </form>
        </>
    );
}
export default Create;