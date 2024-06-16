// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import "./CompanyCard.css";

/** CompanyCard Component
 * 
 * This component is responsible for rendering a company card that is displayed as an li in CompanyList.
 * 
 * Props:
 * - company: object like { handle, name, description, numEmployees, logoUrl }
 * 
 * State: none
 */
const CompanyCard = ({ company }) => {
    // Render
    return (
        <Link to={`/companies/${company.handle}`} className='CompanyCard'>
            <div className='CompanyCard'>
                <h3>{company.name}</h3>
                <p>{company.description}</p>
            </div>
        </Link>
    )
};

// Exports
export default CompanyCard;