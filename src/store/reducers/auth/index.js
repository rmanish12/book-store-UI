import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../../actions/actionTypes'

const initialState = {
    isLoading: false,
    userId: '',
    userName: '',
    userRole: [],
    storeId: '',
    storeName: '',
    errorMessage: '',
    isAuthenticated: false
}

export default function authReducer(state = initialState, action) {

    switch(action.type) {

        case LOGIN_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                userId: action.payload.userId,
                userName: action.payload.userName,
                userRole: action.payload.userRole,
                storeId: action.payload.storeId,
                storeName: action.payload.storeName,
                errorMessage: ''
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.errorMessage
            }

        case LOGOUT:
            return { ...initialState }

        default:
            return { ...state }

    }

}