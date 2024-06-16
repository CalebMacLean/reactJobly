// Imports
import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyAPI';
import CompanyCard from './CompanyCard';
import SearchBar from './SearchBar';
import "./CompanyList.css";

/** CompanyList Component
 * 
 * This component is responsible for rendering a list of companies.
 * 
 * Props:
 * - companies: array of objects like [{ handle, name, description, numEmployees, logoUrl }, ...]
 * 
 * State: none
 */
const CompanyList = () => {
    // State
    const [companiesOnPage, setCompanies] = useState([]);

    // Side Effects
    useEffect(() => {
        // Async Function that makes a GET request to the /companies API endpoint
        async function getCompanies() {
            let companies = await JoblyApi.getCompanies();
            // Update state with the companies
            setCompanies(companies);
        }
        // Call the async function
        getCompanies();
    }, []);

    // Helper Functions
    const search = async (searchTerm) => {
        // make a GET request to the /companies API endpoint with the search term passed as nameLike
        let companies = await JoblyApi.findCompanies(searchTerm);
        // Update state with the companies   results
        setCompanies(companies);
    };

    // Render
    return (
        <div className='CompanyDetail'>
            <h1 className='CompanyDetail-title'>Company</h1>

            <SearchBar search={search} />

            <div className='CompanyDetail-companies'>
                {companiesOnPage.map(company => (
                    <CompanyCard key={company.handle} company={company} />
                ))}
            </div>
        </div>
    )
};

// Exports
export default CompanyList;