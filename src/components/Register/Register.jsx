import React, { useState } from 'react'
import './Register.scss'

const Register = () => {
    const initialValues = {
        zipCode: "",
        firstName: "",
        lastName: "",
        password: "",
        shoppingPreference: "",
        dateOfBirth: "2024-01-01",
        updates: false,
        policy: false,
    }

    const [data, setData] = useState(initialValues);

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        !data.policy ? console.log('most agree policy') : console.log(data);
    };


    return (
        <>
            <div className='register-container'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="zipCode">Code</label>
                    <input type="text" value={data.zipCode} onChange={handleInputChange} name='zipCode' id='zipCode' />
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" value={data.firstName} onChange={handleInputChange} name='firstName' id='firstName' />
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" value={data.lastName} onChange={handleInputChange} name='lastName' id='lastName' />
                    <label htmlFor="password">Pasword</label>
                    <input type="password" value={data.password} onChange={handleInputChange} name='password' id='password' />
                    <label htmlFor="shoppingPreference">Shopping Preference</label>
                    <select value={data.shoppingPreference} onChange={handleInputChange} name="shoppingPreference" id="shoppingPreference">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input type="date" value={data.dateOfBirth} onChange={handleInputChange} name='dateOfBirth' id='dateOfBirth' min="1920-01-01" max="2024-12-31" />
                    <label htmlFor="updates">Get Updates</label>
                    <input type="checkbox" value={data.updates} onChange={handleInputChange} name='updates' id='updates' />
                    <label htmlFor="policy">I Agree</label>
                    <input type="checkbox" value={data.policy} onChange={handleInputChange} name='policy' id='policy' />
                    <button className="btn-primary-dark" type='submit'>Register</button>
                </form>
            </div>
        </>
    )
}

export default Register;