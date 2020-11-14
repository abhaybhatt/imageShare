export const initialState ={
	tasks: [],
	
};


const reducer = (state,action) => {
	switch(action.type)
	{
		case 'ADD_TASK' :
		return{
			...state,
			tasks:[...state.tasks,action.item]
		};
	}
}

export default reducer;