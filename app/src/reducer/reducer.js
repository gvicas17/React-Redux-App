import {FETCH_CHARACTERS, FETCH_CHARACTERS_SUCCESS} from '../actions/actions'

const initialState = {
    characters: [],
    isLoading: false,
    error: ''
}

export default function reducer (state = initialState, action) {
    switch(action.type){
        case FETCH_CHARACTERS:
            return{
                ...state,
                isLoading: true
            }
            case FETCH_CHARACTERS_SUCCESS: 
            return{
                ...state,
                isLoading: false,
                characters: action.payload
            }
        default:
            return state
    }
}