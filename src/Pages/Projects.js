import React from 'react';
import {useSpring, animated} from 'react-spring';
import BracketFolder from '../Components/BracketFolder.js';

function Projects(props) {
    const swoop_in = useSpring({
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
        <animated.div style={swoop_in}>
            <div className="flex-row">
                <div className="flex-main">
                        <BracketFolder title="Repo of this site" text={[<a target="_blank" href="https://github.com/VChauvet/fluffycode_public">fluffycode_public</a>]}/>
                        <BracketFolder title="Experiments" text={[<a target="_blank" href="https://rule30.fluffycode.de">Rule30</a>]}/>

                        <BracketFolder title="Projects in the making:" text={["Mars Weather"]}/>
                        <BracketFolder text={["Logic Gater"]}/>
                </div>
            </div>
        </animated.div>
    )
}

export default Projects