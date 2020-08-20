import React from 'react';
import BracketFolder from './BracketFolder.js';

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function TimeLineJobs(props) {
    const timelineHtml = [];
    // for(let i=props.yearRange.from; i<props.yearRange.to; i++){
    //     timelineHtml.push(<div>{i}</div>)
    // }
    const jobsHtml = props.jobs.map((job,index) => {
        return <div className={"job-"+(index+1)}>
            <div className="title">{job.name}</div>
            <div className="text">{job.text}</div>
        </div>
    })

    const job1 = document.querySelector('job-1');
    return(
        <BracketFolder text={[<div className="timeline">
            <div className="jobs">
                {jobsHtml}
            </div>
        </div>]}/>

    // TODO, implement rendered time line
    // return(
    //     <div className="timeline">
    //         <div className="years">
    //             {timelineHtml}
    //         </div>
    //         <div className="jobs">
    //             {jobsHtml}
    //         </div>
    //     </div>
            // <svg style={{position: "absolute"}}>
            //     <line strokeWidth="2px" stroke="#ffb350"  x1="0" y1="0" x2="100" y2="100" id="mySVG"/>
            // </svg>
    )

}

export default TimeLineJobs