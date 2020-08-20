import React from 'react';
import {useSpring, animated} from 'react-spring';


function InfoMe(props) {
    return(
        <div className="info-container">
            {props.title ? <div className="title">{props.title}</div> : null}
            <div className="content">
                {props.elements.map(text=> <p>{text}</p>)}
            </div>
        </div>
    )

}

export default InfoMe