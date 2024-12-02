import React from 'react'
import Table from '../components/Table';

const DashBoard = () => {
  const headers = [
    "Tasks"
  ]
  const data = [
    { Task: 'Sign contract for "What are conference organizers afraid of?"' },
    { Task: 'Lines From Great Russian Literature? Or E-mails From My Boss?' },
    { Task: 'What was found when a ravaging rain swept through metro Detroit' },
    { Task: 'Create 4 Invisible User Experiences you Never Knew About' },
    { Task: 'Read "Following makes Medium better"' },
    { Task: 'Unfollow 5 enemies from Twitter' },
  ];
  const actions = [
    {
      title: 'Edit Task',
      btnClass: 'btn btn-info btn-simple btn-link',
      iconClass: 'fa fa-edit',
      onClick: (row) => alert(`Edit: ${row.Task}`),
    },
    {
      title: 'Remove Task',
      btnClass: 'btn btn-danger btn-simple btn-link',
      iconClass: 'fa fa-times',
      onClick: (row) => alert(`Remove: ${row.Task}`),
    },
  ];
  return (
    <>
      <div className="wrapper">
        <div className="main-panel">
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="card ">
                    <div className="card-header ">
                      <h4 className="card-title">2017 Sales</h4>
                      <p className="card-category">All products including Taxes</p>
                    </div>
                    <div className="card-body ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eos doloremque consectetur pariatur dolor reprehenderit officiis optio adipisci tempore neque consequatur, deserunt in numquam libero animi dicta commodi quam ut.

                    </div>
                    <div className="card-footer ">
                      <div className="legend">
                        <i className="fa fa-circle text-info" /> Tesla Model S
                        <i className="fa fa-circle text-danger" /> BMW 5 Series
                      </div>
                      <hr />
                      <div className="stats">
                        <i className="fa fa-check" /> Data information certified
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card  card-tasks">

                    <div className="card-body ">
                      <div className="table-full-width">
                        <Table title="Task List"
                          category="Manage your tasks"
                          headers={headers}
                          data={data}
                          actions={actions}
                          striped
                          hover
                        />
                      </div>
                    </div>
                    <div className="card-footer ">
                      <hr />
                      <div className="stats">
                        <i className="now-ui-icons loader_refresh spin" /> Updated 3
                        minutes ago
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
export default DashBoard