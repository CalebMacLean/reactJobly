// Imports
import React from 'react';
import { useNavigate } from 'react-router-dom';

/** Logout Component
 * 
 * This component is responsible for logging the user out of the application and redirecting to the home page.
 * 
 * Props:
 * - logout: function to log the user out
 * 
 * State: none
 */
const Logout = ({logout}) => {
    // Navigate hook
    const navigate = useNavigate();

    // Handle logout
    const handleLogout = () => {
        logout();
        navigate("/", {replace: false});
    };

    // Render
    return (
        <div className="Logout">
            <h1>Logging out...</h1>
            {handleLogout()}
        </div>
    )
};

// Exports
export default Logout;