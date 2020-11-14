import './App.css';
import  Instructor from './Instructor';
import Create from './Create'
import Main from './Main';
import HeaderI from './HeaderI'
import Score from './Score'
import TaskImages from './TaskImages'
import Rate from './Rate'
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    const[data,setData] = React.useState([]);
    console.log(data);

    const addData = (e) =>{
        let newArray = data.slice();
        newArray.push(e);
        setData(newArray);
    }
    const answers =[{id:1,name:"Abhay", image:"https://source.unsplash.com/random",rating:0},
                    {id:1,name:"Atul",image:"https://source.unsplash.com/random",rating:0},
                    {id:1,name:"Bhatt", image:"https://source.unsplash.com/random",rating:0},
                    {id:1,name:"Veer", image:"https://source.unsplash.com/random",rating:0},
                    {id:1,name:"Singh" ,image:"https://source.unsplash.com/random",rating:0},
                    {id:1,name:"daji" ,image:"https://source.unsplash.com/random",rating:0},
    ]
    console.log(answers);
  return (
  	<Router>
    <div className="App">
    <Switch>

    	<Route path='/instructor'>
    		<HeaderI/>
    		<Instructor/>
    	</Route>

    	<Route path='/createtask'>
    		<HeaderI/>
    		<Create addData={addData}/>
    	</Route>

        <Route path='/rate'>
            <HeaderI/>
            <Rate data={answers}/>
        </Route>

    	<Route path='/score'>
    		<HeaderI/>
    		<Score data={data}/>
            <TaskImages data={data}/>
    	</Route>

    	<Route path='/'>
    		<Main/>
    	</Route>


    </Switch>
    </div>
    </Router>
  );
}

export default App;
