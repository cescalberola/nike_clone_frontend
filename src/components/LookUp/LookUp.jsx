import React, { useEffect, useState } from 'react'
import './LookUp.scss'
import '../../glyphs.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { checkEmail, resetRegister } from '../../features/auth/authSlice.js'
import LookUpHeader from './LookUpHeader.jsx'
import { useNavigate } from 'react-router-dom'

const LookUp = () => {
    const [data, setData] = useState({
        country: 'Espana',
        email: '',
        password: '',
    })

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { registered, notRegistered } = useSelector(state => state.auth)

    const countries = [
        { value: 'AF', label: 'Afganistán' },
        { value: 'AL', label: 'Albania' },
        { value: 'DE', label: 'Alemania' },
        { value: 'AD', label: 'Andorra' },
        { value: 'AO', label: 'Angola' },
        { value: 'AI', label: 'Anguila' },
        { value: 'AQ', label: 'Antártida' },
        { value: 'AG', label: 'Antigua y Barbuda' },
        { value: 'AN', label: 'Antillas Holandesas' },
        { value: 'SA', label: 'Arabia Saudita' },
        { value: 'DZ', label: 'Argelia' },
        { value: 'AR', label: 'Argentina' },
        { value: 'AM', label: 'Armenia' },
        { value: 'AW', label: 'Aruba' },
        { value: 'AU', label: 'Australia' },
        { value: 'AT', label: 'Austria' },
        { value: 'AZ', label: 'Azerbaiyán' },
        { value: 'BS', label: 'Bahamas' },
        { value: 'BD', label: 'Bangladesh' },
        { value: 'BB', label: 'Barbados' },
        { value: 'BH', label: 'Baréin' },
        { value: 'BE', label: 'Bélgica' },
        { value: 'BZ', label: 'Belice' },
        { value: 'BJ', label: 'Benín' },
        { value: 'BY', label: 'Bielorrusia' },
        { value: 'BO', label: 'Bolivia' },
        { value: 'BQ', label: 'Bonaire' },
        { value: 'BA', label: 'Bosnia y Herzegovina' },
        { value: 'BW', label: 'Botsuana' },
        { value: 'BR', label: 'Brasil' },
        { value: 'BN', label: 'Brunéi' },
        { value: 'BG', label: 'Bulgaria' },
        { value: 'BF', label: 'Burkina Faso' },
        { value: 'BI', label: 'Burundi' },
        { value: 'BT', label: 'Bután' },
        { value: 'CV', label: 'Cabo Verde' },
        { value: 'KH', label: 'Camboya' },
        { value: 'CM', label: 'Camerún' },
        { value: 'TL', label: 'Timor Oriental' },
        { value: 'TG', label: 'Togo' },
        { value: 'TK', label: 'Tokelau' },
        { value: 'TO', label: 'Tonga' },
        { value: 'TT', label: 'Trinidad y Tobago' },
        { value: 'TN', label: 'Túnez' },
        { value: 'TM', label: 'Turkmenistán' },
        { value: 'TR', label: 'Turquía' },
        { value: 'TV', label: 'Tuvalu' },
        { value: 'UA', label: 'Ucrania' },
        { value: 'UG', label: 'Uganda' },
        { value: 'EU', label: 'Unión Europea' },
        { value: 'UY', label: 'Uruguay' },
        { value: 'UZ', label: 'Uzbekistán' },
        { value: 'VU', label: 'Vanuatu' },
        { value: 'VE', label: 'Venezuela' },
        { value: 'VN', label: 'Vietnam' },
        { value: 'YE', label: 'Yemen' },
        { value: 'ZM', label: 'Zambia' },
        { value: 'ZW', label: 'Zimbabue' },
    ];

    const handleCountryChange = (event) => {
        setData({
            ...data,
            country: event.target.options[event.target.selectedIndex].text,
        })
    };

    const handleOnChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    useEffect(() => {
        if (registered) {
            navigate(`/login/${data.email}`)
        }
        if (notRegistered) {
            navigate(`/register/${data.email}`)
        }
        dispatch(resetRegister())

    }, [registered, notRegistered])
    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(checkEmail(data.email))
    };

    return (
        <div className="css-18wonve">
            <div style={{ outline: "none" }} tabIndex="-1" className='css-18wonveDiv'>
                <div className="css-mkjsdf">
                    <LookUpHeader h1="Enter your email to join us or sign in." />
                    <div role="region" className="css-1qzlyy1">
                        <form onSubmit={handleOnSubmit}>
                            <div className="css-vxgrp0">
                                <div className="css-1u49mdr">
                                    <span data-testid="selected-country-label" className="css-1cq8889">{data.country}</span>
                                    <div className="css-nohim6">
                                        <label htmlFor="country" className="css-t4rufh">Cambiar</label>
                                        <select name="country" id="country" autoComplete="off" aria-label="Cambiar país/región" className="css-7o1x1z"
                                            value={data.country}
                                            onChange={handleCountryChange}
                                        >
                                            {countries.map(country => (
                                                <option key={country.value} value={country.value}>
                                                    {country.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="css-8atqhb css-5p7ysv e192pr2z0 nds-input-container">
                                    <div className="nds-input-layout-control">
                                        <input type="text" name="email" id="email" className="nds-input-text-field css-wxfak7 e1fiih290" autoComplete="email" aria-describedby="username-input-aria-description" aria-required="false" aria-invalid="false" value={data.email} onChange={handleOnChange} />
                                        <span id="username-input-aria-description"
                                            style={{ position: 'absolute', left: '-2000px', fontSize: '0px', width: '0px', height: '0px', overflow: 'hidden', visibility: 'hidden' }}>
                                        </span>
                                        <fieldset className="nds-input-fieldset css-1eif5ff e1jmt8s30" aria-hidden="true">
                                            <legend>Email</legend>
                                        </fieldset>
                                    </div>
                                    <div className="textfield-support-container">
                                    </div>
                                </div>
                                <input data-testid="hidden-input" type="password" id="password" autoComplete="current-password" name="password" aria-hidden="true" tabIndex="-1" hidden="" className="css-1hyfx7x" value={data.password} onChange={handleOnChange} />
                                <div style={{ width: "100%" }}>
                                    <div className="css-m196z">
                                        <div className="css-zinu7o">By Continuing, you agree to Nike's <a target="_blank" href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&amp;country=ES&amp;language=es&amp;requestType=redirect&amp;uxId=4fd2d5e7db76e0f85a6bb56721bd51df" rel="noopener noreferrer" className="css-0">Terms of Use</a> and you confirm you have read Nike's <a target="_blank" href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&amp;country=ES&amp;language=es&amp;requestType=redirect&amp;uxId=4fd2d5e7db76e0f85a6bb56721bd51df" rel="noopener noreferrer" className="css-0">Privacy Policy</a></div>
                                    </div>
                                </div>
                                <div className="css-1cuic7g">
                                    <button aria-label="continue" className="nds-btn css-6kj7vn btn-primary-dark  btn-md" type="submit">Continue<span className="ripple">
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

export default LookUp