import Hero from './Hero';
import { Link } from "react-router-dom";
import img404 from '../404page.jpg';

const PageNotFound = () => {
    return (

        <div className='text-center p-5'>
            <Hero text="Page Not Found" />
            <img className="background" src={img404} alt="" />
            <Link to="/">Go back to Home</Link> 
        </div>
    
    )
}

export default PageNotFound;
