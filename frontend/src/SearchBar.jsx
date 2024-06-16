// Imports
import React, { useState } from 'react';
import "./SearchBar.css";

/** SearchBar Component
 * 
 * This component is responsible for rendering a search bar that allows the user to search for companies or jobs. It provides a form with a search input and a submit button. The changes should be reflected in the parent component.
 * 
 * Props:
 * - search: function to be called when the form is submitted.
 * - filter: function to be called when the form is changed.
 * 
 * State:
 * - formData: object like { search }
 */
const SearchBar = ({ search }) => {
    // State
    const [formData, setFormData] = useState({ search: '' });

    // Event Handlers
    const handleChange = (evt) => {
        // Access name & value from the input element
        const { name, value } = evt.target;

        // Update state with the value;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = (evt) => {
        // Prevent the default behavior
        evt.preventDefault();
        // Call the search function with the search value
        search(formData.search);
    };

    // Render
    return (
        <form 
            className='SearchBar' 
            onSubmit={handleSubmit}
        >
            
            <input
                className='SearchBar-input' 
                type='text' 
                name='search' 
                placeholder='Search...' 
                value={formData.search} 
                onChange={handleChange} 
            />

            <button className='SearchBar-btn'>Submit</button>
        </form>
    )
};

// Exports
export default SearchBar;