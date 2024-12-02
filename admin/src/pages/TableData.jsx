import React from 'react'
import Table from '../components/Table';

const TableData = () => {
  const headers = ["ID", "Name", "Salary", "Country", "City"];
     const data = [
      { ID: 1, Name: "Dakota Rice", Salary: "$36,738", Country: "Niger", City: "Oud-Turnhout" },
    { ID: 2, Name: "Minerva Hooper", Salary: "$23,789", Country: "Curaçao", City: "Sinaai-Waas" },
       { ID: 3, Name: "Sage Rodriguez", Salary: "$56,142", Country: "Netherlands", City: "Baileux" },
     { ID: 4, Name: "Philip Chaney", Salary: "$38,735", Country: "Korea, South", City: "Overland Park" },
      { ID: 5, Name: "Doris Greene", Salary: "$63,542", Country: "Malawi", City: "Feldkirchen in Kärnten" },
        { ID: 6, Name: "Mason Porter", Salary: "$78,615", Country: "Chile", City: "Gloucester" },
          ];
  return (
   <>
   <div className="wrapper">
   <div className="main-panel">
   <div className="content">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <div className="card strpied-tabled-with-hover">
          <div className="card-body table-full-width table-responsive">   
      <Table headers={headers} data={data} striped hover title="Striped Table with Hover" category="Here is a subtitle for this table"/>
      <Table headers={headers} data={data} striped title="Table on Plain Background"  category="Here is a subtitle for this table"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
   </>
  )
}
export default TableData