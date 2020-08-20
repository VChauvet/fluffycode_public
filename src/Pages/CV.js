import React, {Component} from 'react';
import BracketFolder from '../Components/BracketFolder.js';
import InfoMe from '../Components/InfoMe.js';
import {useSpring, animated} from 'react-spring';
import portrait from '../Images/portrait_2020_150x150.jpg';

function CV () {
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
                <div className="flex-side">
                    
                    <InfoMe elements={[<div className="portrait"><img src={portrait} alt="portrait"/></div>]}/>
                    <InfoMe title="CONTACT" elements={[<a href="mailto:valentin@fluffycode.de">valentin@fluffycode.de</a>]}/>
                    <InfoMe title="LANGUAGE" elements={["German (native)","English (fluent)"]}/>
                    <InfoMe title="POWERS" elements={["critical","thinking","team oriented","ressourceful","detail oriented","open minded"]}/>
                    <InfoMe title="INTERESTS" elements={["game programming","crafting / arts","photography","kitchen alchemy","pen & paper roleplay"]}/>
                </div>
                <div className="flex-main">
                    <BracketFolder title="ABOUT ME" text={[null
                                                        ,"Hi, my name is Val. I am a junior web developer."
                                                        ,<span className="gold"> - </span>
                                                        ,"Through my education I  learned  how  to  work  flexibly  and  prioritize  project  tasks  effectively."
                                                        ,<span className="gold"> - </span>
                                                        ,"My travels overseas taught me how to connect faster and adapt to various work  situations."
                                                        ,<span className="gold"> - </span>
                                                        ,"As  part  of  a  closely  knit  international  support  team  I could develop my skills further regarding communication, client relations and time management."
                                                        , <br></br>
                                                        ,"With  high  ambitions,  I  am  looking  for  a  work  environment  with  a  true  team spirit to take the next step as a developer."
                                                    ]} />
                    <BracketFolder title="EXPERTIES" text="PHP - C# - HTML5 - CSS/SCSS - JS - Photoshop" />
                    <BracketFolder title="" text="Wordpress - React - Yii - Silverstripe - Google Analytics" />
                    <BracketFolder title="SELECTED PROJECTS" text={["Company Website"
                                                        ,<span className="grey"> implementation of news system (Silverstripe)</span>
                                                    ]} />
                    <BracketFolder title="" text={["Online Shops"
                                                        ,<span className="grey"> design &amp; implementation (Wordpress, Woocommerce)</span>
                                                    ]} />
                    <BracketFolder title="" text={["School Website"
                                                        ,<span className="grey"> implementation of user management (mySQL backend)</span>
                                                    ]} />
                    <BracketFolder title="" text={["Art Content Management"
                                                        ,<span className="grey"> (Yii Framework)</span>
                                                    ]} />
                    <BracketFolder title="" text={["Open Data for the City Hamburg"
                                                        ,<span className="grey"> (CKAN API, custom Wordpress extension)</span>
                                                    ]} />
                    <BracketFolder title="EMPLOYMENT &amp; EDUCATION" text="" />
                </div>
            </div>
        </animated.div>
    )

}

export default CV