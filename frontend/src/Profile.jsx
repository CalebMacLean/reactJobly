// Imports
import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyAPI';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

/** Profile Component
 * 
 * This component is responsible for rendering a user profile. The profile should be a form that allows users to change their information.
 * 
 * Props:
 * - user: object like { username, firstName, lastName, email, isAdmin, applications }
 * 
 * State:
 * - formData: object like { username, firstName, lastName, email }
 */
const Profile = ({ username }) => {
    // Variables
    const name = username.username;

    // Hooks
    const navigate = useNavigate();

    // redirect if no username is provided
    if (!name) navigate('/login', { replace: false });
    // redirect if no token is found
    const token = localStorage.getItem('token');
    if (!token) navigate('/login', { replace: false });

    // State
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        username: name,
        firstName: "",
        lastName: "",
        email: "",
    });

    // Input Variables
    const userName = user ? user.username : '';
    const firstName = user ? user.firstName : '';
    const lastName = user ? user.lastName : '';
    const email = user ? user.email : '';

    // Event Handlers
    /** Handle input changes by saving them to state */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    /** Handle Form submission by Updating Users data */
    const handleSubmit = async (e) => {
        // Prevent page refresh behavior
        e.preventDefault();
        // Destructure form data
        let { username, firstName, lastName, email } = formData;
        // Create data object for request
        const data = {
            firstName : firstName ? firstName : user.firstName,
            lastName : lastName ? lastName : user.lastName,
            email : email ? email : user.email
        }
        // Send request to update user data
        const res = await JoblyApi.updateUser(name, data);
        // Update state with new user data
        setUser(res);
    };

    // Effects
    useEffect(() => {
        async function getUser() {
            console.log("useEffect Start");
            console.log("Name:", name);
            // const token = localStorage.get(token);
            // const reqData = { token, name };
            const userRes = await JoblyApi.getUser( name );
            console.log('useEffect User:', userRes);
            setUser(userRes);
            console.log("setUser set?", user);
        }
        getUser();
    }, []);

    // Render
    return (
        <div className='Profile'>
            { user ? (
                <>
                <h1 className='Profile-tile'>Profile</h1>

                <form className='Profile-form' onSubmit={ handleSubmit }>
                    <label htmlFor='username'>Username:</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        defaultValue={ userName }
                        // placeholder={ user.username }
                        onChange={ handleChange }
                        disabled
                    />

                    <label htmlFor='firstName'>First Name:</label>
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        defaultValue={ firstName }
                        // placeholder={ user.firstName }
                        onChange={ handleChange }
                    />

                    <label htmlFor='lastName'>Last Name:</label>
                    <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        defaultValue={ lastName }
                        // placeholder={ user.lastName }
                        onChange={ handleChange }
                    />

                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        defaultValue={ email }
                        // placeholder={ user.email }
                        onChange={ handleChange }
                    />

                    <button>Save Changes</button>
                </form>
                </>
            ) : (
                <>
                <h1>Loading...</h1>
                </>
            ) }  
        </div>
    )
};

// Exports
export default Profile;