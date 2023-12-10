import React, { useState } from 'react'
import './Login.scss'
import '../../glyphs.min.css'
import Nike from '../../assets/logos/Nike.jsx'
import Jordan from '../../assets/logos/Jordan.jsx'

const Login = () => {
    const [selectedCountry, setSelectedCountry] = useState('Espana'); // Default to Spain
    const [username, setUsername] = useState('');
    const [password, setPasword] = useState('');

    const handleCountryChange = (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const selectedText = selectedOption.text;
        setSelectedCountry(selectedText);
    };

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
        { value: 'BN', label: 'Brunei Darussalam' },
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

    // const handleOnChange = (event) => {
    //     setusername = event.target.value
    // }

    return (
        <div className="css-18wonve">
            <div style={{ outline: "none" }} tabIndex="-1" className='css-18wonveDiv'>
                <div className="css-mkjsdf">
                    <header tabIndex="0" aria-label="Introduce tu dirección de correo electrónico para unirte o iniciar sesión. group">
                        <div className="css-131faqr">
                            <Nike fill={"currentColor"} width={"48px"} height={"48px"} />
                            <Jordan fill={"currentColor"} width={"48px"} height={"48px"} />
                        </div>
                        <h1 aria-label="Introduce tu dirección de correo electrónico para unirte o iniciar sesión." className="css-1ogxbr3">Introduce tu dirección de correo electrónico para unirte o iniciar sesión.</h1>
                    </header>
                    <div role="region" className="css-1qzlyy1">
                        <form action="#" method="post">
                            <div className="css-vxgrp0">
                                <div className="css-1u49mdr">
                                    <span data-testid="selected-country-label" className="css-1cq8889">{selectedCountry}</span>
                                    <div className="css-nohim6">
                                        <label htmlFor="country" className="css-t4rufh">Cambiar</label>
                                        <select name="country" id="country" autoComplete="off" aria-label="Cambiar país/región" className="css-7o1x1z"
                                            value={selectedCountry}
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
                                        <input type="text" name="credential" id="username" className="nds-input-text-field css-wxfak7 e1fiih290" autoComplete="username" aria-describedby="username-input-aria-description" aria-required="false" aria-invalid="false" value={username} onChange={e => setUsername(e.target.value)} />
                                        <span id="username-input-aria-description"
                                            style={{ position: 'absolute', left: '-2000px', fontSize: '0px', width: '0px', height: '0px', overflow: 'hidden', visibility: 'hidden' }}>
                                        </span>
                                        {/* <label htmlFor="username" className="nds-input-label css-15zk0wt eyw2uzc0" data-testid="label-element">
                                            <span>Correo electrónico</span>
                                        </label> */}
                                        <fieldset className="nds-input-fieldset css-1eif5ff e1jmt8s30" aria-hidden="true">
                                            <legend>Correo electrónico</legend>
                                        </fieldset>
                                    </div>
                                    <div className="textfield-support-container">
                                    </div>
                                </div>
                                <input data-testid="hidden-input" type="password" id="password" autoComplete="current-password" name="password" aria-hidden="true" tabIndex="-1" hidden="" className="css-1hyfx7x" value={password} onChange={e => setPasword(e.target.value)} />
                                <div style={{ width: "100%" }}>
                                    <div className="css-m196z">
                                        <div className="css-zinu7o">Al continuar, aceptas los <a target="_blank" href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&amp;country=ES&amp;language=es&amp;requestType=redirect&amp;uxId=4fd2d5e7db76e0f85a6bb56721bd51df" rel="noopener noreferrer" className="css-0">Términos de uso</a> de Nike y confirmas que has leído la <a target="_blank" href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&amp;country=ES&amp;language=es&amp;requestType=redirect&amp;uxId=4fd2d5e7db76e0f85a6bb56721bd51df" rel="noopener noreferrer" className="css-0">Política de privacidad</a> de Nike.</div>
                                    </div>
                                </div>
                                <div className="css-1cuic7g">
                                    <button aria-label="continue" className="nds-btn css-6kj7vn btn-primary-dark  btn-md" type="submit">Continuar<span className="ripple">
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