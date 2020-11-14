import React from 'react'
import  './Main.css'
import { useHistory } from "react-router-dom";

const Main = () => {
	
	const[email,setEmail] = React.useState('');
	const[password,setPassword] = React.useState('');
	const history = useHistory();

	return(

		<div className='login'>
			
					<img className='login__logo' src="https://uploads-ssl.webflow.com/5e2544675cbbd67ed72643de/5e254b8eb2b645c1cc1332ae_Logo-p-500.png" alt="Abhay"/>
			

			<div className='login__container'>
				<h1>Sign-in</h1>
				<form>
					<h5>E-mail</h5>
					<input 
					onChange={e => setEmail(e.target.value)} 
					value={email} 
					type="text"/>

					<h5>Password</h5>
					<input onChange={e => setPassword(e.target.value)} 
					value={password} 
					type="password"/>

					<button onClick={() => history.push('/instructor')} className='login__signInButton'>Sign In</button>
				</form>

				<p> join us to create world a better place
                </p>

                <button onClick={() => history.push('/instructor')} className='login__registerButton'>Create Your Account</button>
			</div>
		</div>
		)
}

export default Main;