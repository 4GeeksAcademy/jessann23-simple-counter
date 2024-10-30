import React from "react";

const Card = (props) => {
    return (
        <div className="card" style={{ width: "19rem", backgroundColor: 'black', color: 'white', margin: '0' }}>
            <div className="card-body" style={{ textAlign: 'center' }}>
                {props.isClock && (
                    <i 
                        className="fa-solid fa-clock-rotate-lef"
                        style={{ fontSize: '19rem' }} 
                         
                    ></i>
                )}
                <h5 className="card-title" style={{ fontSize: '2rem', margin: 0 }}>
                    {props.numero}
                </h5>
            </div>
        </div>
    );
}

export default Card;
