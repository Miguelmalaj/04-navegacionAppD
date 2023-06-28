import { AuthState } from "./AuthContext";

type authAction = 
    | { type: 'signIn' }
    | { type: 'logout' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'changeUsername', payload: string };

// genera Estado
export const authReducer = ( state: AuthState, action: authAction ): AuthState => {

    switch ( action.type ) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }

        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }

        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }
    
        case 'changeUsername':
            return {
                ...state,
                username: action.payload
            }
    
        default:
            return state;
    }


}