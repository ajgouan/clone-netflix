import React from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { useRef, useEffect, useState } from "react";

const TitleCards = ({ title, category }) => {

    const [apiData, setApiData] = useState([])

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODc2ZjVmMjllNDgxOTNhODFjYjFiNzEyOTVhNDYyMCIsIm5iZiI6MTc3ODI5OTk1Ny44MzEsInN1YiI6IjY5ZmViNDM1MWRhYmEyOWJmNWFlOGI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uZV-F7sinZj11WdZuztD1mgJ7A1cUXvU_dH397bDNuI",
        },
    };

    useEffect(() => {

        fetch(
        `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
        options,
    )
        .then((res) => res.json())
        .then((res) => setApiData(res.results || []))
        .catch((err) => console.error(err));
    }, [])
        

    return (
        <div className="title-cards">
            <h2>{title ? title : "Seulement sur Netflix"}</h2>
            <div className="card-list">
                {apiData.map((card, index) => {
                    return (
                        <div className="card" key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.name} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TitleCards;
