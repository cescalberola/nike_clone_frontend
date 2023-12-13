import React from 'react'

const RightSVG = ({ fill, width, height, className }) => {
    return (
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width={width || "24px"} height={height || "24px"} fill={fill || "none"} className={className || ""}>
            <g>
                <path stroke="currentColor" strokeWidth="1.5" d="M8.474 18.966L15.44 12 8.474 5.033">
                </path>
            </g>
        </svg>
    )
}

export default RightSVG