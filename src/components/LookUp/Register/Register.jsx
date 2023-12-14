import React, { useEffect, useState } from 'react'
import './Register.scss'
import '../../../ncss.en-us.min.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { register, reset } from '../../../features/auth/authSlice';
import LookUpHeader from '../LookUpHeader';

const Register = () => {
    const { email } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isSuccess, message, isError } = useSelector((state) => state.auth);

    const [data, setData] = useState({
        email: email,
        verificationCode: "",
        firstName: "",
        lastName: "",
        password: "",
        shoppingPreference: "",
        birthDay: "",
        marketingOptIn: false,
        privacyTerms: false,
    });

    const [note, setNote] = useState('')

    useEffect(() => {
        if (isSuccess) {
            setNote(message)
            navigate(`/login/${data.email}`)
        }
        if (isError) {
            setNote(message)
        }
        dispatch(reset())
    }, [isSuccess, message, isError]);

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    }

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;

        setData({
            ...data,
            [name]: checked,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(register(data));
    };

    return (
        <>
            <div className="css-18wonve">
                <div style={{ outline: "none" }} tabIndex="-1" className='css-18wonveDiv'>
                    <div className="css-1g30k5b">
                        <LookUpHeader h1={"Now let's make you a Nike Member"} />
                        <div aria-label="subheader-text" className="css-pjd5pq">We've sent a code to<div className="css-13o17gl">
                            <span className="css-skhanb">{data.email}</span>
                            <Link to='/lookup' fontSize="medium" className="css-5iaamc">Edit</Link>
                        </div>
                        </div>
                        <div role="region" className="css-1qzlyy1">
                            <form onSubmit={handleSubmit}>
                                <div className="css-vxgrp0">
                                    <div className="css-5ourb5">
                                        <div className="css-1am57kc css-5p7ysv e192pr2z0 nds-input-container input-suffix">
                                            <div className="nds-input-layout-control">
                                                <input type="text" name="verificationCode" id="l7r-code-input" className="nds-input-text-field css-1c9zkn0 e1fiih290" autoComplete="one-time-code" aria-describedby="l7r-code-input-input-aria-description" aria-required="false" aria-invalid="false" inputMode="numeric" placeholder='Code' value={data.verificationCode} onChange={handleInputChange} />
                                                <span id="l7r-code-input-input-aria-description" style={{ position: "absolute", left: "-2000px", fontSize: "0px", width: "0px", height: "0px", overflow: "hidden", visibility: "hidden" }}>
                                                </span>
                                                <span className="nds-input-trailing-icon css-yshjmt e1723x6b0 nds-trailing-icon-container">
                                                    <button type="button" aria-label="volver a enviar código" className="css-1qmkbv8">
                                                        <svg aria-hidden="false" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" id="Repeat-m-icon">
                                                            <path fill="currentColor" fillRule="evenodd" d="M23.395 11.841l-1.061-1.061-1.338 1.338c0-.039.005-.078.005-.118 0-4.962-4.038-9-9-9C8.734 3 5.877 4.756 4.3 7.367L5.392 8.46A7.506 7.506 0 0112 4.5c4.136 0 7.5 3.364 7.5 7.5 0 .06-.011.117-.013.177l-1.396-1.397-1.061 1.061 2.185 2.184-.001.001.998.997.373-.373 2.809-2.809zM12 19.5c-4.136 0-7.5-3.364-7.5-7.5 0-.06.011-.117.013-.177L5.91 13.22l1.061-1.06-2.185-2.184.001-.001-.998-.998-.373.373v.001L.606 12.16l1.061 1.061 1.338-1.338c0 .04-.005.078-.005.118 0 4.963 4.038 9 9 9 3.267 0 6.124-1.756 7.701-4.367L18.61 15.54A7.506 7.506 0 0112 19.5z" clipRule="evenodd">
                                                            </path>
                                                            <title>Repeat-Medium (Default Size)-icon</title>
                                                        </svg>
                                                    </button>
                                                </span>
                                                <fieldset className="nds-input-fieldset css-1eif5ff e1jmt8s30" aria-hidden="true">
                                                    <legend>Code</legend>
                                                </fieldset>
                                            </div>
                                            <div className="textfield-support-container">
                                            </div>
                                        </div>
                                        <div className="css-1rvsp8p">Resend code in 0&nbsp;s</div>
                                    </div>
                                    <div className='name-container'>
                                        <div className="css-hdsri0 css-5p7ysv e192pr2z0 nds-input-container">
                                            <div className="nds-input-layout-control">
                                                <input type="text" name="firstName" id="l7r-first-name-input" className="nds-input-text-field css-wxfak7 e1fiih290" autoComplete="given-name" aria-describedby="l7r-first-name-input-input-aria-description" aria-required="false" aria-invalid="false" placeholder='First Name' value={data.firstName} onChange={handleInputChange} />
                                                <span id="l7r-first-name-input-input-aria-description" style={{ position: "absolute", left: "-2000px", fontSize: "0px", width: "0px", height: "0px", overflow: "hidden", visibility: "hidden" }}>
                                                </span>
                                                <fieldset className="nds-input-fieldset css-1eif5ff e1jmt8s30" aria-hidden="true">
                                                    <legend>First Name</legend>
                                                </fieldset>
                                            </div>
                                            <div className="textfield-support-container">
                                            </div>
                                        </div>
                                        <div className="css-hdsri0 css-5p7ysv e192pr2z0 nds-input-container">
                                            <div className="nds-input-layout-control">
                                                <input type="text" name="lastName" id="l7r-last-name-input" className="nds-input-text-field css-wxfak7 e1fiih290" autoComplete="family-name" aria-describedby="l7r-last-name-input-input-aria-description" aria-required="false" aria-invalid="false" placeholder='Last Name' value={data.lastName} onChange={handleInputChange} />
                                                <span id="l7r-last-name-input-input-aria-description" style={{ position: "absolute", left: "-2000px", fontSize: "0px", width: "0px", height: "0px", overflow: "hidden", visibility: "hidden" }}>
                                                </span>
                                                <fieldset className="nds-input-fieldset css-1eif5ff e1jmt8s30" aria-hidden="true">
                                                    <legend>Last Name</legend>
                                                </fieldset>
                                            </div>
                                            <div className="textfield-support-container">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="css-5p7ysv e192pr2z0 nds-input-container input-suffix">
                                        <div className="nds-input-layout-control">
                                            <input type="password" name="password" id="l7r-password-input" className="nds-input-text-field css-1c9zkn0 e1fiih290" autoComplete="new-password" aria-describedby="password-rules" aria-required="false" aria-invalid="false" aria-atomic="true" placeholder='Password' value={data.password} onChange={handleInputChange} />
                                            <span id="l7r-password-input-input-aria-description" style={{ position: "absolute", left: "-2000px", fontSize: "0px", width: "0px", height: "0px", overflow: "hidden", visibility: "hidden" }} >
                                            </span>
                                            <button type="button" className="nds-input-trailing-icon css-yshjmt e1723x6b0 nds-trailing-icon-container" title="" aria-label="Mostrar u ocultar contraseña">
                                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <title>Show Password</title>
                                                    <desc>Created with Sketch.</desc>
                                                    <g id="Icons-/-Forms-/-Password-/-Show" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                        <g id="Icon/Interface/Eye/Open/Black">
                                                            <rect id="Container" x="0" y="0" width="24" height="24">
                                                            </rect>
                                                            <g id="eye" transform="translate(1.000000, 4.000000)" fill="#000000" fillRule="nonzero">
                                                                <path d="M20.92,7.6 C18.9,2.91 15.1,0 11,0 C6.9,0 3.1,2.91 1.08,7.6 C0.968686852,7.85505046 0.968686852,8.14494954 1.08,8.4 C3.1,13.09 6.9,16 11,16 C15.1,16 18.9,13.09 20.92,8.4 C21.0313131,8.14494954 21.0313131,7.85505046 20.92,7.6 Z M11,14 C7.83,14 4.83,11.71 3.1,8 C4.83,4.29 7.83,2 11,2 C14.17,2 17.17,4.29 18.9,8 C17.17,11.71 14.17,14 11,14 Z M11,4 C8.790861,4 7,5.790861 7,8 C7,10.209139 8.790861,12 11,12 C13.209139,12 15,10.209139 15,8 C15,6.93913404 14.5785726,5.92171839 13.8284271,5.17157288 C13.0782816,4.42142736 12.060866,4 11,4 Z M11,10 C9.8954305,10 9,9.1045695 9,8 C9,6.8954305 9.8954305,6 11,6 C12.1045695,6 13,6.8954305 13,8 C13,9.1045695 12.1045695,10 11,10 Z" id="Shape">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </button>
                                            <fieldset className="nds-input-fieldset css-1eif5ff e1jmt8s30" aria-hidden="true">
                                                <legend>Password</legend>
                                            </fieldset>
                                        </div>
                                        <div className="textfield-support-container">
                                        </div>
                                    </div>
                                    <div id="password-rules" aria-live="polite" aria-atomic="true" data-testid="password-error-text" className="css-vl5qra">
                                        <div color="lightGrey" className="css-5aganl">
                                            <svg aria-label="Error. Tu contraseña necesita:" tabIndex="0" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.351562 1.35156L9.64823 10.6482" stroke="#757575">
                                                </path>
                                                <path d="M9.64823 1.35156L0.351562 10.6482" stroke="#757575">
                                                </path>
                                            </svg>
                                            <p tabIndex="0">Minimum of 8 characters</p>
                                        </div>
                                        <div color="lightGrey" className="css-5aganl">
                                            <svg aria-label="Error. Tu contraseña necesita:" tabIndex="0" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.351562 1.35156L9.64823 10.6482" stroke="#757575">
                                                </path>
                                                <path d="M9.64823 1.35156L0.351562 10.6482" stroke="#757575">
                                                </path>
                                            </svg>
                                            <p tabIndex="0">Uppcase, lowercase letters, and one number</p>
                                        </div>
                                    </div>
                                    <div className="css-1x6kkl1 e1i9v64g0 nds-dropdown-container">
                                        <div className="nds-select-layout-control">
                                            <label htmlFor="l7r-shopping-preference" className="nds-dropdown-label css-15zk0wt eyw2uzc0" data-testid="label-element">
                                                <span>{data.shoppingPreference || "Shopping Preference"}</span>
                                            </label>
                                            <div className="nds-dropdown-select-container css-1jjxzuj erx5h8s0">
                                                <select value={data.shoppingPreference} onChange={handleInputChange} name="shoppingPreference" id="shoppingPreference" autoComplete="off"
                                                    className="nds-dropdown-select-container css-1jjxzuj erx5h8s0"
                                                    aria-required="false" aria-invalid="false" aria-describedby="l7r-shopping-preference-select-aria-description" >
                                                    <option hidden="" data-testid="hidden-option" disabled aria-hidden="true" defaultValue>Shopping Preference</option>
                                                    <option value="Men">Men</option>
                                                    <option value="Woman">Woman</option>
                                                </select>
                                                <div className="value-display" aria-hidden="true">
                                                    <span data-testid="dropdown-value-display">
                                                    </span>
                                                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                                        <path stroke="currentColor" strokeWidth="1.5" d="M18.966 8.476L12 15.443 5.033 8.476">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <span id="l7r-shopping-preference-select-aria-description" style={{ position: "absolute", left: "-2000px", fontSize: "0px", width: "0px", height: "0px", overflow: "hidden", visibility: "hidden" }} >
                                                </span>
                                            </div>
                                        </div>
                                        <div className="dropdown-support-container">
                                        </div>
                                    </div>
                                    <div className="nds-datepicker er6rhxo0 css-1sv225p e192pr2z0 nds-input-container input-suffix">
                                        <div className="nds-input-layout-control">
                                            <input type="date" name="birthDay" id="l7r-date-of-birth-input" className="nds-input-text-field css-1c9zkn0 e1fiih290" autoComplete="bday" aria-describedby="l7r-date-of-birth-input-input-aria-description" aria-required="false" aria-invalid="false" max="2023-12-31" value={data.birthDay} onChange={handleInputChange} />
                                            <label htmlFor="l7r-date-of-birth-input" className="nds-input-label css-15zk0wt eyw2uzc0" data-testid="label-element">
                                                <span>{data.birthDay || "Date of Birth"}</span>
                                            </label>
                                            <span className="nds-input-trailing-icon css-yshjmt e1723x6b0 nds-trailing-icon-container">
                                                <svg aria-hidden="false" focusable="false" viewBox="0 0 24 24" role="button" width="24px" height="24px" fill="none">
                                                    <path stroke="currentColor" strokeWidth="1.5" d="M18 20.25H6A2.25 2.25 0 013.75 18V7.5A2.25 2.25 0 016 5.25h12a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25z" clipRule="evenodd">
                                                    </path>
                                                    <path stroke="currentColor" strokeWidth="1.5" d="M20.25 9.75H3.75M8.25 3v4.5m7.5-4.5v4.5">
                                                    </path>
                                                    <title>Calendar</title>
                                                </svg>
                                            </span>
                                            <fieldset className="nds-input-fieldset css-1eif5ff e1jmt8s30" aria-hidden="true">
                                            </fieldset>
                                        </div>
                                        <div className="textfield-support-container">
                                            <span className="nds-input-support-text css-15h1hlh e1xmwk8m0" aria-live="polite" data-testid="support-text">Get a Nike Member Reward on your birthday.</span>
                                        </div>
                                    </div>
                                    <div className="css-1if9n40">
                                        <div className="css-a78bb1 eokc0d80 nds-checkbox-container light">
                                            <input type="checkbox" className="nds-checkbox" name="marketingOptIn" id="marketingOptIn" aria-describedby="a11y-label-details-marketingOptIn" onChange={handleCheckboxChange} value={data.marketingOptIn} checked={data.marketingOptIn} />
                                            <label htmlFor="marketingOptIn" className="nds-checkbox-label">Sign up for emails to get updates from Nike on products offers and your Member benefits.</label>
                                        </div>
                                    </div>
                                    <div style={{ width: "100%" }} >
                                        <div className="css-1inw02m">
                                            <div className="css-a78bb1 eokc0d80 nds-checkbox-container light">
                                                <input type="checkbox" className="nds-checkbox" name="privacyTerms" id="privacyTerms" aria-describedby="a11y-label-details-privacyTerms" aria-label="I Agree to Nike's Terms of Use and I confirm I have read Nike's Privacy Policy." onChange={handleCheckboxChange} value={data.privacyTerms} checked={data.privacyTerms} />
                                                <label htmlFor="privacyTerms" className="nds-checkbox-label">I Agree to Nike's <a target="_blank" href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&amp;country=ES&amp;language=es&amp;requestType=redirect&amp;uxId=4fd2d5e7db76e0f85a6bb56721bd51df" rel="noopener noreferrer" className="css-0">Terms of Use</a> and I confirm I have read Nike's <a target="_blank" href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&amp;country=ES&amp;language=es&amp;requestType=redirect&amp;uxId=4fd2d5e7db76e0f85a6bb56721bd51df" rel="noopener noreferrer" className="css-0">Privacy Policy</a>.</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="css-8o5ntm">
                                        <button aria-label="Crear una cuenta" className="nds-btn css-6kj7vn btn-primary-dark  btn-md" type="submit">Create Account<span className="ripple">
                                        </span>
                                        </button>
                                    </div>
                                </div>
                            </form >
                        </div >
                    </div >
                </div >
            </div >
        </>
    )
}

export default Register;