import React from 'react';
import './HeaderI.css';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link } from "react-router-dom";




const HeaderI =  () => {

	
	
	return (
		<div className="header">
			
			<img 
					 className='header__logo'
					 src="https://uploads-ssl.webflow.com/5e2544675cbbd67ed72643de/5e254b8eb2b645c1cc1332ae_Logo-p-500.png" 
					 alt="trueExam" />
			
			

			<div className='header__search'>
				<input 
					className='header__searchInput'
					type="text"
					placeholder="Search task here" />

				<SearchIcon className='header__searchIcon' />

			</div>

			<div className='header__nav'>
				<Link to='/createtask'  style={{ color: 'inherit', textDecoration: 'inherit'}} >
					<div className='header__option'>
						
							<span className='header__optionLineOne'>Create</span>
							<span className='header__optionLineTwo'>a task</span>
					</div>
				</Link>

				<Link to='/score'  style={{ color: 'inherit', textDecoration: 'inherit'}} >
					<div className='header__option'>
						<span className='header__optionLineOne'>Score</span>
						<span className='header__optionLineTwo'>a task</span>
					</div>
				</Link>
				
				
				<div className='header__optionAccount'>

					<AccountCircleIcon />
					<NotificationsIcon />
				</div>
				

			</div>
		</div>

		)
}

export default HeaderI;