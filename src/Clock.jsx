import React from 'react'


function Clock(props) {

    let i = 0;
    while (i < 1000000000) {
        i++;
    }

    console.log("render", props)

    return (
        <div className="container">
            <p className="timeLeft">Big component  {props.name}</p>
        </div>
    )
}


export default React.memo(Clock)

