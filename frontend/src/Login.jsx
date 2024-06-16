// Imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JoblyApi from './JoblyAPI';
import "./Login.css";

/** Login Component
 * 
 * This component is responsible for rendering a login form.
 * 
 * Props: none
 * 
 * State:
 * - formData: object like { username, password }
 */
const Login = ({ login }) => {
    // State
    const [formData, setFormData] = useState({username: "", password: ""});
    // Navigation hook
    const navigate = useNavigate();

    // Handlers
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const token = await JoblyApi.loginUser(formData);
            const user = { username: formData.username };
            login(user, token);
            setFormData({username: "", password: ""});
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    // Render
    return (
        <div className="Login">
            <h1>Login</h1>

            <form className="Login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        className="form-control"
                        value={formData.username}
                        onChange={(evt) => setFormData(fData => ({...fData, username: evt.target.value}))}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="form-control"
                        value={formData.password}
                        onChange={(evt) => setFormData(fData => ({...fData, password: evt.target.value}))}
                    />
                </div>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
};

// Exports
export default Login;