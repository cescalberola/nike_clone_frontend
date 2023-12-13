import React, { useEffect, useState } from 'react'
import './Register.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Register = () => {
    const { username } = useParams()
    const [data, setData] = useState({
        username: username,
        zipCode: "",
        firstName: "",
        lastName: "",
        password: "",
        shoppingPreference: "",
        dateOfBirth: "",
        updates: false,
        policy: false,
    });
    useEffect(() => {
        if (!username) {
            navigate(`/lookup`)
        }
    }, [])
    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(data)
        // !data.policy ? console.log('most agree policy') : dispatch(register(data));
    };


    return (
        <>
            <div className='register-container'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={data.zipCode} onChange={handleInputChange} name='zipCode' id='zipCode' placeholder='Code' />
                    <input type="text" value={data.firstName} onChange={handleInputChange} name='firstName' id='firstName' placeholder='First Name' />
                    <input type="text" value={data.lastName} onChange={handleInputChange} name='lastName' id='lastName' placeholder='Last Name' />
                    <input type="password" value={data.password} onChange={handleInputChange} name='password' id='password' placeholder='Pasword' />
                    <select value={data.shoppingPreference} onChange={handleInputChange} name="shoppingPreference" id="shoppingPreference">
                        <option value='' disabled defaultValue>Shopping Preference</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input type="date" value={data.dateOfBirth} onChange={handleInputChange} name='dateOfBirth' id='dateOfBirth' min="1920-01-01" max="2024-12-31" />
                    <div className='checkboxes'>
                        <input type="checkbox" value={data.updates} onChange={handleInputChange} name='updates' id='updates' />
                        <label htmlFor="updates">Get Updates</label>
                    </div>
                    <div className='checkboxes'>
                        <input type="checkbox" value={data.policy} onChange={handleInputChange} name='policy' id='policy' />
                        <label htmlFor="policy">I Agree</label>
                    </div>
                    <button className="btn-primary-dark" type='submit'>Register</button>
                </form>
            </div>
        </>
    )
}

export default Register;