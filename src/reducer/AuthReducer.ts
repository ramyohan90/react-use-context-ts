import { AuthContextType, AuthState } from "../store/context";


export const AuthStateReducer = (state: AuthState, action: AuthContextType) => {
    switch (action.type) {
        case 'auth':
                console.log('auth');
                if (action.payload && action.payload.isLoggedIn) {
                    state.isLoggedIn = action.payload.isLoggedIn;
                    state.user = action.payload.user;
                    state.token = action.payload.token;
                }
            return action.payload;
        default:
            return state;
    }
}
