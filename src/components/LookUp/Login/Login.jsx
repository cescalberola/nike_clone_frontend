import React, { useState } from 'react'
import '../LookUp.scss'
import '../../../glyphs.min.css'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import LookUpHeader from '../LookUpHeader.jsx'
import { login } from '../../../features/auth/authSlice.js'

const Login = () => {
    const { username } = useParams()
    const [data, setData] = useState({
        // country: 'Espana',
        username: username,
        password: '',
    })

    const dispatch = useDispatch();

    const handleOnChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        password && dispatch(login(data))
    };

    return (
        <div className="css-18wonve">
            <div style={{ outline: "none" }} tabIndex="-1" className='css-18wonveDiv'>
                <div className="css-mkjsdf">
                    <LookUpHeader h1="Password" />
                    <div role="region" className="css-1qzlyy1">
                        <form onSubmit={handleOnSubmit}>
                            <div className="css-vxgrp0">
                                <div className="css-1u49mdr">
                                    <span data-testid="selected-country-label" className="css-1cq8889">{data.username}</span>
                                    <div className="css-nohim6">
                                        <div className="css-zinu7o"><a target="_blank" href="#" className="css-0">Cambiar</a></div>
                                    </div>
                                </div>
                                <div className="css-8atqhb css-5p7ysv e192pr2z0 nds-input-container">
                                    <div className="nds-input-layout-control">
                                        <input type="text" name="username" id="username" className="nds-input-text-field css-wxfak7 e1fiih290" autoComplete="username" aria-describedby="username-input-aria-description" aria-required="false" aria-invalid="false" value={data.password} onChange={handleOnChange} />
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
                                    <button aria-label="continue" className="nds-btn css-6kj7vn btn-primary-dark  btn-md" type="submit">Sing In<span className="ripple">
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