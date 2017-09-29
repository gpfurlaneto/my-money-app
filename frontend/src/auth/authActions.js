import { toastr } from 'react-redux-toastr'
import axios from 'axios'

export function login(values) {
    return submit(values, `${__OAPI__}/login`)
}

export function signup(values) {
    return submit(values, `${__OAPI__}/signup`)
}

function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    { type: 'USER_FETCHED', payload: resp.data }
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Error', error))
            })
    }
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false }
}

export function validateToken(token) {
    return dispatch => {
        if(token) {
            axios.post(`${__OAPI__}/validateToken`, { token })
                .then(resp => {
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid})
                })
                .catch(e => 
                    dispatch({ type: 'TOKEN_VALIDATED', payload: false}))
        }else{
            dispatch({ type: 'TOKEN_VALIDATED', payload: false})
        }
    }
}