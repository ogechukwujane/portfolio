import react from "react";
import Navbar from "./Navbar";
import './Portfolio.css';
import Mysite from '../images/portfolio.png'
import Tictac from '../images/tictacb.png'


const Portfolio = () => {
    return(
        <div className="portfolio-container" >
            <div className="portfolionav" id="portfolio"></div>
            <p className="portfolio">PORTFOLIO</p>
            <p className="my-recent-work">My recent works</p>
            <div className="row">
                <div className="big">
                    <div className="image-description-container">
                        <div className="my-work-image">
                        <img src={Tictac}  className="Portfolioimg"/>
                            <a href="#"><p className="design-name">Tic-Tac-toe Game</p></a>
                        </div>
                        <p className="design-description">Simple game to relieve your mind</p> 
                    </div>
                </div>
                <div className="big">
                    <div className="image-description-container">
                        <div className="my-work-image">
                        <img src={Mysite}  className="Portfolioimg"/>
                           <a href="#"><p className="design-name">Foodie Page</p></a> 
                        </div>
                        <p className="design-description">My portfolio site</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default Portfolio;