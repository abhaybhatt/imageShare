import  React from 'react';
import './Score.css'
import TaskImages from './TaskImages'


// const rows = data.map(obj =>{
// 	id:{obj.id},
// 	taskName:{obj.name},
// 	attempted:{obj.id}
// })
// const rows = [
//   { idno: 1, name: 'Snow', attempted: 10 },
//   { idno: 2, name: 'Lannister',  attempted: 2 },
//   { idno: 3, name: 'Lannister',  attempted: 4 },
//   { idno: 4, name: 'Stark',  attempted: 6 },
//   { idno: 5, name: 'Targaryen',  attempted: 0 },
//   { idno: 6, name: 'Melisandre',  attempted: 0 },
//   { idno: 7, name: 'Clifford',  attempted: 4 },
//   { idno: 8, name: 'Frances',  attempted: 3 },
//   { idno: 9, name: 'Roxie', firstName: 'Harvey', attempted: 5 },
// ];

 const Score = ({data}) => {
 	console.log(data.length);
 	
 	return(
 		<div className ="Score">
 		{data.length === 0 && <div className="Score__head">
 		 			<h1>No task created yet</h1>
 		 		</div>}

 			<div>
	 		<div className="table">
	 		<tr>
	 			<td><strong>Task ID</strong></td>
	 			<td><strong>Task Name</strong></td>
	 		</tr>
	 			{data.map((task) =>(
	 				<tr>
	 					<td className="inner">{task.idno.id}</td>
	 					<td className="inner">{task.name.name}</td>
	 				</tr>
	 				))}
	 		</div>
 		</div>
 		</div>
 		
 		)
}

export default Score;