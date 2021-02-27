import React from 'react'
import SideDrawer from '../sideDrawer/SideDrawer'

const home = (props) => {

    const { onLogout } = props

    return (
        <>
            <SideDrawer onLogout={onLogout}/>
        </>
    )
}

export default home