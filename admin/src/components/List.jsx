import React from 'react'

const List = ({title,onClick,listClass}) => {
  return (
   <>
     <li className="nav-item " style={{cursor:"pointer"}} onClick={onClick}>
        {title==="Home"|| title=="Company" || title=="Portfolio" || title=="Blog" ? 
        <li>
        <a href="#">{title}</a>
      </li>:<p className="nav-link">
          <i className={listClass} />
          {title == "Search" || title == "Dropdown" || title == "Log Out" || title == "Account" ? 
          <span className="no-icon">&nbsp;{title}</span>:
          <p>{title}</p>
          }
          
        </p>}
      </li>
   </>
  )
}

export default List
