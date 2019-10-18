import React from "react"

// props way to create a new component
const Avatar = props => {
    return(
    <section>
        <img src={props.image}/>
        <h1>{props.firstName}</h1>
        <h2>{props.lastName}</h2>     
    </section>
    )
}

export default Avatar;