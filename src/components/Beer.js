import React from 'react'

function Beer(props) {
    console.log(props);
    const beerData = props.beerData;

    const { title, sub } = beerData;
    //destructuring

    return (
        <div>
            <h1>{title}</h1>
            <p>{sub}</p>
        </div>
    )
}

export default Beer
