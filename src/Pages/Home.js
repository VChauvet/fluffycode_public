import React from 'react';
import {useSpring, animated} from 'react-spring';
import BracketFolder from '../Components/BracketFolder.js';

function Home(props) {
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
                        <BracketFolder title="Hello," 
                            text={["ddd"]}>
                        </BracketFolder>
                </div>
            </div>
        </animated.div>
    )
}

export default Home