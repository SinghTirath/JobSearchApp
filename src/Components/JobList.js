import React,{Component} from 'react';
import JobListItem from './JobListItem';

const JobList = (props) => {
    const JobItems = props.jobs.map((job) => {
        return(
            <JobListItem
                onJobSelect={props.onJobSelect}
                job={job}
            />
        );
    });

    return(
        <div>
            <div className="list-group">
                {JobItems}
            </div>
        </div>
    );

};


export default JobList;


