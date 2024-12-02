import React from 'react'
import Button from '../components/Button'

const User = () => {
  return (
    <>
     <div className="wrapper">
     <div className="main-panel">
    <div className="content">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Edit Profile</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-5 pr-1">
                  <div className="form-group">
                    <label>Company (disabled)</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled=""
                      placeholder="Company"
                      defaultValue="Creative Code Inc."
                    />
                  </div>
                </div>
                <div className="col-md-3 px-1">
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      defaultValue="michael23"
                    />
                  </div>
                </div>
                <div className="col-md-4 pl-1">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 pr-1">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company"
                      defaultValue="Mike"
                    />
                  </div>
                </div>
                <div className="col-md-6 pl-1">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      defaultValue="Andrew"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Home Address"
                      defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 pr-1">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      defaultValue="Mike"
                    />
                  </div>
                </div>
                <div className="col-md-4 px-1">
                  <div className="form-group">
                    <label>Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                      defaultValue="Andrew"
                    />
                  </div>
                </div>
                <div className="col-md-4 pl-1">
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="ZIP Code"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>About Me</label>
                    <textarea
                      rows={4}
                      cols={80}
                      className="form-control"
                      placeholder="Here can be your description"
                      value="Mike"
                      defaultValue={
                        "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                      }
                    />
                  </div>
                </div>
              </div>
              <Button btnClass="btn btn-info btn-fill pull-right" title="Update Profile"/>
              <div className="clearfix" />
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-user">
          <div className="card-image">
            <img
              src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              alt="..."
            />
          </div>
          <div className="card-body">
            <div className="author">
              <a href="#">
                <img
                  className="avatar border-gray"
                  src="../assets/img/faces/face-3.jpg"
                  alt="..."
                />
                <h5 className="title">Mike Andrew</h5>
              </a>
              <p className="description">michael24</p>
            </div>
            <p className="description text-center">
              "Lamborghini Mercy
              <br /> Your chick she so thirsty
              <br /> I'm in that two seat Lambo"
            </p>
          </div>
          <hr />
          <div className="button-container mr-auto ml-auto">
            <Button btnClass="btn btn-simple btn-link btn-icon" iconClass="fa fa-facebook-square"/>
            <Button btnClass="btn btn-simple btn-link btn-icon" iconClass="fa fa-twitter"/>
            <Button btnClass="btn btn-simple btn-link btn-icon" iconClass="fa fa-google-plus-square"/>
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

export default User