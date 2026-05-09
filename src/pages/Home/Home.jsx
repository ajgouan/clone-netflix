import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import title_logo from "../../assets/title_logo.webp";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="hero">
                <img src={hero_banner} alt="" className="hero-banner" />
                <div className="hero-caption">
                    <div className="info-caption">
                        <img src={title_logo} alt="" className="hero-title" />
                        <div className="info-season">
                            Regardez la saison 2 maintenant
                        </div>
                        <p>
                            Ses jours étant comptés, le lycéen Yuji décide de
                            dévorer les 19 derniers doigts d'une puissante
                            malédiction pour que celle-ci soit annéantie avec
                            lui.
                        </p>
                        <div className="hero-btn">
                            <button className="btn">
                                <img src={play_icon} alt="" />
                                Lecture
                            </button>
                            <button className="btn btn-dark" id="pd-r">
                                <img
                                    className="more-btn"
                                    src={info_icon}
                                    alt=""
                                />
                                Plus d'infos
                            </button>
                        </div>
                        <TitleCards />
                    </div>
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title={"Populaires sur Netflix"} category={"popular"}/>
                <TitleCards title={"Tendances actuelles"} category={"top_rated"}/>
                <TitleCards title={"Les plus regardés"} category={"now_playing"}/>
                <TitleCards title={"À venir"} category={"upcoming"}/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
