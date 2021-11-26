import React from 'react'

export default function Cards(props) {
    const cardwidth={
        width: "18rem"
    }
    return (
        <>
         <div className="card" style={cardwidth}>
  <img src={props.src} className="card-img-top"/>
  <div className="card-body">
    <h3 className="card-text"><b>{props.title}</b></h3>
  </div>
</div>   
        </>
    )
}
