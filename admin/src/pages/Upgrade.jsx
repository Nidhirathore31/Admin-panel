import React from 'react'
import Button from '../components/Button'
import Table from '../components/Table'

const Upgrade = () => {
  const headers =["Title","Free","Pro"]
  const data = [
    { Title:"components",Free:"16",Pro:"155+" },
    {Title:"plugins",Free:"4",Pro:"14+" },
    {Title:"Example page",Free:"4",Pro:"22+" },
    {Title:"Documentation",Free:"4",Pro:"14+" },
    {Title:"SASS Files",Free:"10",Pro:"20+" },
    {Title:"Login/Register/Lock Page",Free:"10",Pro:"40+" },
    {Title:"Premium Support",Free:"0",Pro:"100+" },
  ]
  return (
   <>
    <div className="wrapper">
    <div className="main-panel">
   <div className="content">
  <div className="container-fluid">
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto">
            <div className="card">
              <div className="header text-center">
                <h4 className="title">Light Bootstrap Dashboard PRO</h4>
                <p className="category">
                  Are you looking for more components? Please check our Premium
                  Version of Light Bootstrap Dashboard.
                </p>
                <br />
              </div>
              <div className="content table-responsive table-upgrade">
                <Table headers={headers} data={data} />
                <Button title="Current Version" btnClass="btn btn-round btn-fill btn-default disabled" />
                <Button title="Upgrade to PRO" btnClass="btn btn-round btn-fill btn-info" />
              </div>
            </div>
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

export default Upgrade