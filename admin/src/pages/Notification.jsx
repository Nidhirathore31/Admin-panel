import React from 'react'
import Button from '../components/Button'

const Notification = () => {
  return (
    <>
      <div className="wrapper">
        <div className="main-panel">
          <div className="content">
            <div className="container-fluid">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Notifications</h4>
                  <p className="card-category">
                    Handcrafted by our friend
                    <a target="_blank" href="https://github.com/mouse0270">
                      Robert McIntosh
                    </a>
                    . Please checkout the
                    <a href="http://bootstrap-notify.remabledesigns.com/" target="_blank">
                      full documentation.
                    </a>
                  </p>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h5>
                        <small>Notifications Style</small>
                      </h5>
                      <div className="alert alert-info">
                        <span>This is a plain notification</span>
                      </div>
                      <div className="alert alert-info">
                      <Button btnClass="close" iconClass="nc-icon nc-simple-remove"/>
                        <span>This is a notification with close button.</span>
                      </div>
                      <div
                        className="alert alert-info alert-with-icon"
                        data-notify="container"
                      >
                        <Button btnClass="close" iconClass="nc-icon nc-simple-remove"/>
                        <span data-notify="icon" className="nc-icon nc-bell-55" />
                        <span data-notify="message">
                          This is a notification with close button and icon.
                        </span>
                      </div>
                      <div
                        className="alert alert-info alert-with-icon"
                        data-notify="container"
                      >
                         <Button btnClass="close" iconClass="nc-icon nc-simple-remove"/>
                        <span data-notify="icon" className="nc-icon nc-bell-55" />
                        <span data-notify="message">
                          This is a notification with close button and icon and have many
                          lines. You can see that the icon and the close button are always
                          vertically aligned. This is a beautiful notification. So you
                          don't have to worry about the style.
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h5>
                        <small>Notification States</small>
                      </h5>
                      <div className="alert alert-primary">
                         <Button btnClass="close" iconClass="nc-icon nc-simple-remove"/>
                        <span>
                          <b> Primary - </b> This is a regular notification made with
                          ".alert-primary"
                        </span>
                      </div>
                      <div className="alert alert-info">
                      <Button btnClass="close" iconClass="nc-icon nc-simple-remove"/>
                        <span>
                          <b> Info - </b> This is a regular notification made with
                          ".alert-info"
                        </span>
                      </div>
                      <div className="alert alert-success">
                      <Button btnClass="close" iconClass="nc-icon nc-simple-remove"/>
                        <span>
                          <b> Success - </b> This is a regular notification made with
                          ".alert-success"
                        </span>
                      </div>
                      <div className="alert alert-warning">
                      <Button btnClass="close" iconClass="nc-icon nc-simple-remove"/>
                        <span>
                          <b> Warning - </b> This is a regular notification made with
                          ".alert-warning"
                        </span>
                      </div>
                      <div className="alert alert-danger">
                      <Button btnClass="close" iconClass="nc-icon nc-simple-remove"/>
                        <span>
                          <b> Danger - </b> This is a regular notification made with
                          ".alert-danger"
                        </span>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="places-buttons">
                    <div className="row">
                      <div className="col-md-6 offset-md-3 text-center">
                        <h4 className="card-title">
                          Notifications Places
                          <p className="card-category">
                            <small>Click to view notifications</small>
                          </p>
                        </h4>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-md-3 col-lg-3">
                        <Button title="Top Left" btnClass="btn btn-default btn-block" />
                      </div>
                      <div className="col-md-3 col-lg-3">
                        <Button title="Top Center" btnClass="btn btn-default btn-block" />
                      </div>
                      <div className="col-md-3 col-lg-3">
                        <Button title="Top Right" btnClass="btn btn-default btn-block" />
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-md-3 col-lg-3">
                        <Button title="Bottom Left" btnClass="btn btn-default btn-block" />
                      </div>
                      <div className="col-md-3 col-lg-3">
                        <Button title="Bottom Center" btnClass="btn btn-default btn-block" />
                      </div>
                      <div className="col-md-3 col-lg-3">
                      <Button title="Bottom Right" btnClass="btn btn-default btn-block" />
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

export default Notification