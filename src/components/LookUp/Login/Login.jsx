import React, { useEffect, useState } from 'react'
import '../LookUp.scss'
import '../../../glyphs.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import LookUpHeader from '../LookUpHeader.jsx'
import { login } from '../../../features/auth/authSlice.js'

const Login = () => {
    const { username } = useParams()

    const { user, token } = useSelector(state => state.auth)

    const [data, setData] = useState({
        // country: 'Espana',
        email: username,
        password: '',
    })
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleOnChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        if (user && token) {
            navigate(`/`)
        }
    }, [user, token])


    const handleOnSubmit = (e) => {
        e.preventDefault();
        password && dispatch(login(data))
    };

    return (
        <div className="css-18wonve">
            <div style={{ outline: "none" }} tabIndex="-1" className='css-18wonveDiv'>
                <div className="css-mkjsdf">
                    <LookUpHeader h1="What's your password?" />
                    <div role="region" className="css-1qzlyy1">
                        <form onSubmit={handleOnSubmit}>
                            <div className="css-vxgrp0">
                                <div className="css-1u49mdr">
                                    <span data-testid="selected-country-label" className="css-1cq8889">{data.email}</span>
                                    <div className="css-nohim6">
                                        <div className="css-zinu7o"><a target="_blank" href="#" className="css-0">Edit</a></div>
                                    </div>
                                </div>
                                <div className="css-8atqhb css-5p7ysv e192pr2z0 nds-input-container">
                                    <div className="nds-input-layout-control">
                                        <input type="password" name="password" id="password" className="nds-input-text-field css-wxfak7 e1fiih290" autoComplete="password" aria-describedby="password-input-aria-description" aria-required="false" aria-invalid="false" value={data.password} onChange={handleOnChange} />
                                        <span id="username-input-aria-description"
                                            style={{ position: 'absolute', left: '-2000px', fontSize: '0px', width: '0px', height: '0px', overflow: 'hidden', visibility: 'hidden' }}>
                                        </span>
                                        <fieldset className="nds-input-fieldset css-1eif5ff e1jmt8s30" aria-hidden="true">
                                            <legend>Password</legend>
                                        </fieldset>
                                    </div>
                                    <div className="textfield-support-container">
                                    </div>
                                </div>
                                <div style={{ width: "100%" }}>
                                    <div className="css-m196z">
                                        <div className="css-zinu7o"><a target="_blank" href="#" className="css-0">Forgot your password?</a></div>
                                    </div>
                                </div>
                                <div className="css-1cuic7g">
                                    <button aria-label="continue" className="nds-btn css-6kj7vn btn-primary-dark  btn-md" type="submit">Sign In<span className="ripple">
                                    </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login