import React from 'react';
import HeaderI from './HeaderI.js';
import './Create.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
			  return <MuiAlert elevation={6} variant="filled" {...props} />;
			}


const Create = ({addData}) => {
	
	const[imageURL,setImageURL] = React.useState('');
	const[image,setImage] = React.useState('');
	const[id,setID] = React.useState('');
	const[name,setName] = React.useState('');
	const[description,setDescription] = React.useState('');
	const [open, setOpen] = React.useState(false);
	const [open2, setOpen2] = React.useState(false);


		

			const handleClose = (event, reason) => {
				    if (reason === 'clickaway') {
				      return;
				    }

				    setOpen(false);
				    setOpen2(false);
				  };

	const click = (e) => {
		const imageFile = e.target.files[0];
		setImage(imageFile);
		setImageURL(URL.createObjectURL(imageFile));
	}

	const handleClick = () => {
		if((id!=='') && (name!=='') && (description!=='') && (image!=='') )
		{
			setOpen(true);
			var obj = {name:{name} , idno:{id}, description:{description}, img:{imageURL}}
			addData(obj);
		    setName('');
		    setID('');
		    setDescription('');
		    setImage('');
		}
		else{
			setOpen2(true);
		}
			
		
		    
	};


	return(
		<div clasName="create__task">

			<div className="task__data body">
				<div class="container">
						<div class="contact-box">
							<div class="right">
								<h2>Enter Details of task</h2>
								<input value={name} onChange={e => setName(e.target.value)} type="text" class="field" placeholder="Task Name"/>
								<input value={id} onChange={e => setID(e.target.value)} type="number" class="field" placeholder="Task Id"/>
								<input onChange={e=>click(e)} className="input__image" type="file" id="img" name="img" accept="image/*" />
								<textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description about task" class="field"></textarea>
								<button onClick={handleClick} className="btn"><a href={imageURL} download style={{ color: 'inherit', textDecoration: 'inherit'}}>Submit task</a></button>
								<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
								        <Alert onClose={handleClose} severity="success">
								          Task is successfully created!
							        </Alert>
							     </Snackbar>

							     <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose}>
								        <Alert onClose={handleClose} severity="error">
								          One or more field is empty
							        	</Alert>
							     </Snackbar>

							</div>
						</div>
				</div>
			</div>

		</div>

		)
}

export default Create;