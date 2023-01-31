
import Oge from '../images/jahne.png';
import './Home.css';

const Home = () => {
    return(
        <div id="home" >
            <div className="home-container">
                <div className="image-container">
                    <img src={Oge} className="image" alt="" />
                </div>
                <div className="text-container">
                    <div className="text-wrapper">
                        <p className="text1">Hey,</p>
                        <p className="text2">
                            I'm<br/> Ogechukwu Jane
                        </p>
                        <p className="text3">A Web Designer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;