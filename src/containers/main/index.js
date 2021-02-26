import React, { useState } from 'react'
import Main from '../../components/main/Main'

const main = () => {

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const onChangeHandler = e => {
        const name = e.target.name
        const value = e.target.value

        setState({
            ...state,
            [name]: value
        })
    }

    const onLoginHandler = e => {
        e.preventDefault()
        console.log(state)
    }

    return (
        <>
            <Main state={state} onChangeHandler={onChangeHandler} onLoginHandler={onLoginHandler}/>
        </>
    )
}

export default main