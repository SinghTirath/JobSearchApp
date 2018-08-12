import React from 'react';

const JobListItem = ({job, onJobSelect}) => {
    const name = job.title;

    return(
        <div 
            onClick={ () => onJobSelect(job)}
            key={job.id}
        >
            <a  className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{name}</h5>
                    <small>{job.created_at.substr(4,9)}</small>
                </div>
                <div className="content mb-1" dangerouslySetInnerHTML={{__html: job.description.substr(0,50)}}></div>
                <small>{job.type}</small>
            </a>
        </div>
    );
}

export default JobListItem;

