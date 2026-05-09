import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'

const Login = () => {

	const [signInState, setSignInState] = useState("Sign In")

	return (
		<div className="login">
			<img src={logo} alt="" className='login-logo' />
			<div className="login-form">
				<h1>Sign In</h1>
				<form>
					{signInState == "Sign Up" ? <input type="text" placeholder='Votre Nom' /> : <></> }
					<input type="email" placeholder='Email' />
					<input type="password" placeholder='Mot de passe' />
					<button>{signInState}</button>
					<div className="form-help">
						<div className="remember">
							<input type="checkbox" />
							<label htmlFor="">Se souvenir de moi</label>
						</div>
						<p>Besoin d'aide?</p>	
					</div>
				</form>
				<div className="form-switch">
					{signInState == "Sign Up" ? <p>Vous avez déjà un compte ? <span onClick={()=>{setSignInState("Sign In")}}>Se connecter</span> </p> : <p>Nouveautés sur Netflix ? <span onClick={()=>{setSignInState("Sign Up")}}>S'inscrire</span> </p>}
				</div>
			</div>
		</div>
	)
}

export default Login