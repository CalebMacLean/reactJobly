// Imports
import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import JoblyApi from './JoblyAPI';
import "./JobList.css";

/** JobList Component
 * 
 * This component is responsible for rendering a list of jobs.
 * 
 * Props:
 * - jobs: array of objects like [{ id, title, salary, equity, companyHandle, companyName }, ...]
 * 
 * State: none
 */
const JobList = ({ jobs=null }) => {
    // State
    const [jobsList, setJobsList] = useState(jobs);
    // check if jobsList is an array
    const isJobsListArray = Array.isArray(jobsList);

    // Side Effects
    useEffect(() => {
        async function getJobList() {
            if (jobs === null) {
                let jobs = await JoblyApi.getJobs();
                setJobsList(jobs);
            }
        };
        getJobList();
    }, []);

    // Render
    return (
        <div className="JobList">
            <h1 className='JobList-title'>Jobs</h1>

            {isJobsListArray ?
                jobsList.map(job => (
                    <JobCard job={job} key={job.id} />
                ))
                : <p>Loading...</p>
            }
        </div>
    )
};

// Exports
export default JobList;