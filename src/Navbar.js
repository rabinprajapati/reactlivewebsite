import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
    <div className='navbar'>
        <h1>Rabin TodoList</h1>
        <Link to="/">Home</Link><br/>
        <Link to="/create">add</Link>
        <hr/>
    </div>);
}
export default Navbar;