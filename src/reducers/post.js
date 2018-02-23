const initialPostState = ""


export default (state = initialPostState, action) => {
    switch(action.type){
        case 'ADD_DESCRIPTION': 
        return action.description
        default: 
            return state;
    }
}