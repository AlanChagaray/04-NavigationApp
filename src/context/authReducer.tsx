import { AuthState } from "./AuthContext";

type AuthAction = 
    |{ type: 'singIn'}
    |{ type: 'singOut'}
    |{ type: 'changeFavIcon' , payload:string}
    |{ type: 'changeUserName' , payload:string}


export const authReducer =( state: AuthState, action : AuthAction): AuthState => {
    
    switch (action.type) {
        case 'singIn':
            return{
                ...state,
                isLoggedIn : true,
                userName : 'no-username'
            }    
        case 'singOut':
            return{
                ...state,
                isLoggedIn : false,
                userName : undefined,
                favoriteIcon : undefined
            }     
        case 'changeFavIcon':
            return{
                ...state,
                favoriteIcon : action.payload
            }
        case 'changeUserName':
            return{
                ...state,
                userName : action.payload
            }
        default:
            return state;
    }
}