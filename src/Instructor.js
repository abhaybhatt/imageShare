import React from 'react'
import './Instructor.css'
import Box from './Box.js'
import Box2 from './Box2.js'

const Instructor = () => {
	return(
		<div className = "instructor">
			<div className="cards">
		        <Box/>
		        <Box2/>
		    </div>
		</div>
		)
}

export default Instructor;