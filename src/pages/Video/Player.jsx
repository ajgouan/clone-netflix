import React, { useEffect, useState } from 'react'
import './Player.css'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react';

const Player = () => {

	const {id} = useParams();

	const navigate = useNavigate();

	const [apiData, setApiData] = useState({
		name:'',
		key:'',
		published_at:'',
		type:''
	})

	const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODc2ZjVmMjllNDgxOTNhODFjYjFiNzEyOTVhNDYyMCIsIm5iZiI6MTc3ODI5OTk1Ny44MzEsInN1YiI6IjY5ZmViNDM1MWRhYmEyOWJmNWFlOGI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uZV-F7sinZj11WdZuztD1mgJ7A1cUXvU_dH397bDNuI'
	}
	};

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
		.then(res => res.json())
		.then(res => setApiData(res.results[0]))
		.catch(err => console.error(err));
	}, [])

	return (
		<div className='player'>
			<ArrowLeft className='arrow-left' onClick={() => navigate(-2)} />
			<iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameborder="0" allowFullscreen></iframe>
			<div className="player-info">
				<p><span>Date de sortie</span> : {apiData.published_at.slice(0,10)}</p>
				<p>{apiData.name}</p>
				<p></p>
			</div>
		</div>
	)
}

export default Player