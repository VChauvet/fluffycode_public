import React, {Component} from 'react';

class BracketFolder extends Component {
    render() {
        return(
            <>
            <div className="section-title">
                {this.props.title}
            </div>
            <div className="section">
                <div className="bracket-corner" />
                <div className="section-content">
                    {this.props.text}
                </div>
                <div className="bracket-corner" />
            </div>
            </>
        )
    }
}

export default BracketFolder