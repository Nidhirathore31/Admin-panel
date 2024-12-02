import React from 'react'

const Button = ({btnClass,iconClass,title}) => {
  return (
    <>
     {/* <td className="td-actions text-right"> */}
                      <button
                        type="button"
                        rel="tooltip"
                        className={btnClass}
                      >{title}
                        <i className={iconClass}/>
                      </button>
                     
                    {/* </td> */}
    </>      
  )
}

export default Button