import React from 'react'
import './index.css'

const App = () => {

    const sum = (a, b) => a + b;

    return (
        <>
            <h4 className="greeting">Hello!!</h4>
            <h5>{sum(1, 2)}</h5>
        </>
    )
}

export default App