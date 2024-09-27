import React from 'react'

function Card(props) {
    console.log("props", props)
    console.log(props.username)
    return (
        <div>Card {props.username}</div>
    )
}

export default Card
