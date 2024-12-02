import React from 'react'


const Icon = ({ iconClass, label }) => {
    return (
        <>
            <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="font-icon-detail">
                    <i className={`nc-icon ${iconClass}`} />
                    <p>{label}</p>
                </div>
            </div>
        </>
    )
}

export default Icon

