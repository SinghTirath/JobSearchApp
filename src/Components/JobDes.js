import React,{Component} from 'react';
import './JobDes.css'

const JobDesc = ({job}) => {
    if(!job){
        return(
            <div>Loading...</div>
        );
    }
    const jobId = job.id;
    
    return(
        <div className="desc">
            Name: {job.title}<br/>
            <div className="content" dangerouslySetInnerHTML={{__html: job.description}}></div>
            Location: {job.location}<br/>
        </div>
    );
}

export default JobDesc;