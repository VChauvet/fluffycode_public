import React, {Component} from 'react';


function BracketFolder(props) {
    return(
        <>  {props.title ?
            <div className="section-title">
                {props.title}
            </div>
            : null}
            {props.text ?
            <div className="section">
                <div className="bracket-corner" />
                <div className="section-content">
                    {props.text}
                </div>
                <div className="bracket-corner" />
            </div>
            : null}
        </>
    )

}

export default BracketFolder