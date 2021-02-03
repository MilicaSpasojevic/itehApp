import { DODAJ_JELO } from "../actions/iteh";


const initialState = {
    jelo: {}
}



const MealReducer = (state=initialState,action)=>{
    switch(action.type){
        case DODAJ_JELO: 
            return {jelo: action.jelo}
        default: return state;
    }
    return state;
}

export default MealReducer;