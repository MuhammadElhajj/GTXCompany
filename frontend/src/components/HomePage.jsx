import Video from '../assets/videos/Home.mp4';
import { FaAngleDoubleDown } from 'react-icons/fa';

function HomePage () {
    return (
        <main class="Main" id="Home">
        <div class="layout">
            <h1 class="layout__h1"><span>GT</span> Company</h1>
            <p class="layout__p">The Best Place To Work</p>
            <button className='Send__Information__Button'>Send Messages <FaAngleDoubleDown className='FaAngleDoubleDown'/></button>
        </div>
        <video autoPlay loop muted id="myVideo">  
                <source src={Video} type="video/mp4" />  
                Your browser does not support the video tag.  
            </video>  
    </main>
    )
}

export default HomePage ;

// autoplay muted loop id="myVideo"