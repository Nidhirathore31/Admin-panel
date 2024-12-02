import React from 'react'

const Table = ({ headers, data, striped = false, hover = false ,title,category,actions=[] }) => {
  return (
   <>
   <div className="card-header ">
            <h4 className="card-title">{title}</h4>
            <p className="card-category">{category}</p>
          </div>
    <table className={`table ${hover ? "table-hover" : ""} ${striped ? "table-striped" : ""}`}>
      <thead>
       <tr>
         {headers.map((header, index) => (
           <th key={index}>{header}</th>
         ))}
       </tr>
    </thead>
   <tbody>
       {data.map((row, index) => {
        return(
        <tr key={index}>
 {row.Task?
            (
              <>
               <td>
              {row.Task}
            </td>
               <td>
               {actions.map(({ title, btnClass, iconClass, onClick }, actionIndex) => (
                  <button
                    key={actionIndex}
                     className={btnClass}
                    title={title}
                     onClick={() => onClick(row)}
                  >
                    <i className={iconClass}></i></button>
             ))}
              </td>   
              </>    
                     )
              :
               (<>
                <td >{row.ID}{row.Title}</td>
               <td >{row.Name}{row.Free}</td>
               <td >{row.Salary}{row.Pro}</td>
               <td >{row.Country}</td>
               <td >{row.City}</td>
               </>
               )
               }
            </tr>
        )       
})}
     </tbody>
   </table>
   </>
  )
}
export default Table