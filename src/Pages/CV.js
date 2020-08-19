import React, {Component} from 'react';
import BracketFolder from '../Components/BracketFolder.js';

class CV extends Component {
    render() {
        return(
            <div>
                <h2>Curriculum Vitae</h2>
                <BracketFolder title="ABOUT ME" text="Hi, my name is Val. I am a junior web developer. -  Through my education I  learned  how  to  work  flexibly  and  prioritize  project  tasks  effectively. - My travels overseas taught me how to connect faster and adapt to various work  situations.  -  As  part  of  a  closely  knit  international  support  team  I could develop my skills further regarding communication, client relations and time management. With  high  ambitions,  I  am  looking  for  a  work  environment  with  a  true  team spirit to take the next step as a developer." />
                <BracketFolder title="EXPERTIES" text="" />
                <BracketFolder title="SELECTED PROJECTS" text="" />
                <BracketFolder title="EMPLOYMENT &amp; EDUCATION" text="" />
            </div>
        )
    }
}

export default CV