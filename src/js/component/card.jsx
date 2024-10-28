import React from "react";
function Card(props){
    return(
    <div className="card" style={{ 
        backgroundColor: 'black', 
        color: 'white', 
        height: '100px', 
        width: '100px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        margin: '0'
    }}>
        <div className="card-body" style={{ textAlign: 'center' }}>
        {props.isClock && <i className="fa-solid fa-clock" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}></i>}

            <h5 className="card-title" style={{ fontSize: '2rem', margin: 0 }}>{props.numero}</h5>
        </div>
    </div>
    )
}
    

export default Card