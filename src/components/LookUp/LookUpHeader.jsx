import React from 'react'
import Nike from '../../assets/logos/Nike.jsx'
import Jordan from '../../assets/logos/Jordan.jsx'
import './LookUpHeader.scss'

const LookUpHeader = ({ h1 }) => {
    return (
        <header tabIndex="0">
            <div className="css-131faqr">
                <Nike fill={"currentColor"} width={"48px"} height={"48px"} />
                <Jordan fill={"currentColor"} width={"48px"} height={"48px"} />
            </div>
            <h1 aria-label={h1} className="css-1ogxbr3">{h1}</h1>
        </header>
    )
}

export default LookUpHeader;