const initialModalState = {
    isOpen: false
}

export default (state=initialModalState, action) => {
    switch(action.type){
        case 'TOGGLE_MODAL':
            if(state.isOpen){
                return {
                    isOpen: false
                }
            }else{
                return {
                    isOpen: true
                }
            }
        default: return state;
    }
}