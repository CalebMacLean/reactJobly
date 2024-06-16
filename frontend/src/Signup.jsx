// Imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JoblyApi from './JoblyAPI';
import './Signup.css';

/** Signup Component
 * 
 * This component is responsible for rendering a signup form.
 * 
 * Props:
 * - login: function to set Apps user state
 * 
 * State:
 * - formData: object like { username, password, firstName, lastName, email }
 */
const Signup = ({ login }) => {
    // State
    const INITIAL_STATE = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    // Hooks
    const navigate = useNavigate();

    // Event Handlers
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const { username, firstName, lastName, email } = formData;
            const user = { username, firstName, lastName, email };
            const token = await JoblyApi.registerUser(formData);
            login(user, token);
            setFormData(INITIAL_STATE);
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };


    // Render
    return (
        <div className="Signup">
            <h1>Signup</h1>

            <form className='Signup-form' onSubmit={ handleSubmit }>
                <label htmlFor='username'>Username</label>
                <input 
                    type='text' 
                    id='username' 
                    name='username'
                    onChange={ handleChange }
                />

                <label htmlFor='password'>Password</label>
                <input 
                    type='password' 
                    id='password' 
                    name='password'
                    onChange={ handleChange }
                />

                <label htmlFor='firstName'>First Name</label>
                <input 
                    type='text' 
                    id='firstName' 
                    name='firstName'
                    onChange={ handleChange } 
                />

                <label htmlFor='lastName'>Last Name</label>
                <input 
                    type='text' 
                    id='lastName' 
                    name='lastName'
                    onChange={ handleChange }
                />

                <label htmlFor='email'>Email</label>
                <input 
                    type='email' 
                    id='email' 
                    name='email' 
                    onChange={ handleChange }
                />

                <button>Submit</button>
            </form>
        </div>
    )
};

// Exports
export default Signup;