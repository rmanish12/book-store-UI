import React from 'react'
import Home from '../../components/home/Home'
import { connect } from 'react-redux'

import { onLogout } from '../../store/actions/auth'

const home = (props) => {

    const { onLogout } = props

    return (
        <>
            <Home onLogout={onLogout}/>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(onLogout())
    }
}

export default connect(null, mapDispatchToProps)(home)