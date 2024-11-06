
import React from "react";

const Card = (props) => {
    return (
        <div className="card" style={{ width: "19rem", backgroundColor: 'black', color: 'white', margin: '0' }}>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                {props.isClock && (
                    <i 
                        className="far fa-clock"
                        style={{ fontSize: '3.6rem', margin: '0' }}  
                    ></i>
                )}
                <h5 className="card-title" style={{ fontSize: '3rem', margin: 0 }}>
                    {props.numero}
                </h5>
            </div>
        </div>
    );
}

export default Card;
