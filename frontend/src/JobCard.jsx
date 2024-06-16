// Imports
import React from 'react';
import "./JobCard.css";

/** JobCard Component
 * 
 * This component is responsible for rendering a single job card.
 * 
 * Props:
 * - job: object like { id, title, salary, equity, companyHandle, companyName }
 * 
 * State: none
 */
const JobCard = ({ job }) => {
    // Render
    return (
        <div className="JobCard">
            <h2 className='JobCard-title'>{job.title}</h2>
            <p className='JobCard-company'>{job.companyName}</p>
            <p className='JobCard-info'>Salary: {job.salary}</p>
            <p className='JobCard-info'>Equity: {job.equity}</p>
        </div>
    )
};

// Exports
export default JobCard;