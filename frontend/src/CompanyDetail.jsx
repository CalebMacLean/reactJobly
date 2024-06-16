// Imports
import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './JoblyAPI';
import JobCard from './JobCard';
import "./CompanyDetail.css";

/** CompanyDetail Component
 * 
 * This component is responsible for rendering the details of a company.
 * 
 * Props: none
 * 
 * State: none
 */
const CompanyDetail = () => {
    // State
    const [company, setCompany] = useState(null);
    // Get the handle from the URL params
    const { handle } = useParams();

    // Side Effects
    useEffect(() => {
        // Async Function that makes a GET request to the /companies/:handle API endpoint
        async function getCompany() {
            // companyRes -> { handle, name, description, numEmployees, logoUrl, jobs }
            let companyRes = await JoblyApi.getCompany(handle);
            // Update state with the companyRes
            setCompany(companyRes);
        }
        // Call the async function
        getCompany();
    });

    // Render
    return (
        <div className='CompanyDetail'>
            {company ? (
                <div>
                    <h1 className='CompanyDetail-title'>{company.name}</h1>
                    <p>{company.description}</p>
                    <p>Number of Employees: {company.numEmployees}</p>
                    <p>Logo: <img src={company.logoUrl} alt={company.name} /></p>

                    <h2>Jobs</h2>
                    {company.jobs.map(job => (
                        <JobCard job={job} key={job.id} />
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
};

// Exports
export default CompanyDetail;