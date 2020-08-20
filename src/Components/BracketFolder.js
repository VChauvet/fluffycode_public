import React, {Component} from 'react';
import {useSpring, animated} from 'react-spring';


function BracketFolder(props) {
    const fade_in = useSpring({opacity: 1, from: {opacity: 0}});
    const swoop_in = useSpring(
        {
            from: {
                opacity: 0,
                transform: 'translate3d(0,20px,0) scale(1) rotateX(0deg)',
            },
            to: {
                opacity: 1,
                transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
            }
        });
    return(
        <>
            <div className="section-title">
                {props.title}
            </div>
            <div className="section">
                <div className="bracket-corner" />
                <div className="section-content">
                    {props.text}
                </div>
                <div className="bracket-corner" />
            </div>
        </>
    )

}

export default BracketFolder