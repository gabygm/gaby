import React, { Component } from "react"


const CardList = (props) => {
    return(
    <div>
        {props.profile.map(profile =>  <Card  {...profile}/>)}
    </div>
    )
    
}



class Card extends Component {
    render() {
        const profile = this.props
        return (
            <div>Name: {profile.name}</div>
        )
    }
}

export default CardList;
