import axios from 'axios'

import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actionTypes'

const setToken = (token) => {
    document.cookie = `authToken=${token}`
}

const removeToken = () => {
    document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

export const onLogin = ({email, password}) => dispatch => {

    dispatch({
        type: LOGIN_LOADING
    })

    axios.post('/login', {email, password})
        .then(res => {
            setToken(res.data.token)
            
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    userId: res.data.employee.id,
                    userName: res.data.employee.name,
                    userRole: res.data.employee.role,
                    storeId: res.data.store ? res.data.store.id : '',
                    storeName: res.data.store ? res.data.store.name : ''
                }
            })
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAILURE,
                payload: {
                    errorMessage: err.response.data.message
                }
            })
        })

}