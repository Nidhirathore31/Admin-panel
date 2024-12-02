import React from 'react'
import Icon from '../components/Icon';

const icons = [
  { iconClass: "nc-air-baloon", label: "nc-air-baloon" },
  { iconClass: "nc-album-2", label: "nc-album-2" },
  { iconClass: "nc-alien-33", label: "nc-alien-33" },
  { iconClass: "nc-align-center", label: "nc-align-center" },
  { iconClass: "nc-align-left-2", label: "nc-align-left-2" },
  { iconClass: "nc-ambulance", label: "nc-ambulance" },
  { iconClass: "nc-android", label: "nc-android" },
  { iconClass: "nc-app", label: "nc-app" },
  { iconClass: "nc-apple", label: "nc-apple" },
  { iconClass: "nc-atom", label: "nc-atom" },
  { iconClass: "nc-attach-87", label: "nc-attach-87" },
  { iconClass: "nc-audio-92", label: "nc-audio-92" },
  { iconClass: "nc-backpack", label: "nc-backpack" },
  { iconClass: "nc-badge", label: "nc-badge" },
  { iconClass: "nc-bag", label: "nc-bag" },
  { iconClass: "nc-bank", label: "nc-bank" },
  { iconClass: "nc-battery-81", label: "nc-battery-81" },
  { iconClass: "nc-bell-55", label: "nc-bell-55" },
  { iconClass: "nc-bold", label: "nc-bold" },
  { iconClass: "nc-bulb-63", label: "nc-bulb-63" },
  { iconClass: "nc-bullet-list-67", label: "nc-bullet-list-67" },
  { iconClass: "nc-bus-front-12", label: "nc-bus-front-12" },
  { iconClass: "nc-button-pause", label: "nc-button-pause" },
  { iconClass: "nc-button-play", label: "nc-button-play" },
  { iconClass: "nc-button-power", label: "nc-button-power" },
  { iconClass: "nc-camera-20", label: "nc-camera-20" },
  { iconClass: "nc-caps-small", label: "nc-caps-small" },
  { iconClass: "nc-cart-simple", label: "nc-cart-simple" },
  { iconClass: "nc-cctv", label: "nc-cctv" },
  { iconClass: "nc-chart-bar-32", label: "nc-chart-bar-32" },
  { iconClass: "nc-chart-pie-35", label: "nc-chart-pie-35" },
  { iconClass: "nc-badge", label: "nc-badge" },
  { iconClass: "nc-chart-pie-36", label: "nc-chart-pie-36" },
  { iconClass: "nc-chart", label: "nc-chart" },
  { iconClass: "nc-chat-round", label: "nc-chat-round" },
  { iconClass: "nc-check-2", label: "nc-check-2" },
  { iconClass: "nc-circle-09", label: "nc-circle-09" },
  { iconClass: "nc-circle", label: "nc-circle" },
  { iconClass: "nc-cloud-download-93", label: "nc-cloud-download-93" },
  { iconClass: "nc-cloud-upload-94", label: "nc-cloud-upload-94" },
  { iconClass: "nc-compass-05", label: "nc-compass-05" },
  { iconClass: "nc-controller-modern", label: "nc-controller-modern" },
  { iconClass: "nc-credit-card", label: "nc-credit-card" },
  { iconClass: "nc-delivery-fast", label: "nc-delivery-fast" },
  { iconClass: "nc-email-83", label: "nc-email-83" },
  { iconClass: "nc-email-85", label: "nc-email-85" },
  { iconClass: "nc-explore-2", label: "nc-explore-2" },
  { iconClass: "nc-fav-remove", label: "nc-fav-remove" },
  { iconClass: "nc-favourite-28", label: "nc-favourite-28" },
  { iconClass: "nc-globe-2", label: "nc-globe-2" },
  { iconClass: "nc-grid-45", label: "nc-grid-45" },
  { iconClass: "nc-headphones-2", label: "nc-headphones-2" },
  { iconClass: "nc-html5", label: "nc-html5" },
  { iconClass: "nc-istanbul", label: "nc-istanbul" },
  { iconClass: "nc-layers-3", label: "nc-layers-3" },
  { iconClass: "nc-light-3", label: "nc-light-3" },
  { iconClass: "nc-send", label: "nc-send" },
  { iconClass: "nc-scissors", label: "nc-scissors" },
  { iconClass: "nc-satisfied", label: "nc-satisfied" },
  { iconClass: "nc-ruler-pencil", label: "nc-ruler-pencil" },
  { iconClass: "nc-refresh-02", label: "nc-refresh-02" },
  { iconClass: "nc-quote", label: "nc-quote" },
  { iconClass: "nc-puzzle-10", label: "nc-puzzle-10" },
  { iconClass: "nc-preferences-circle-rotate", label: "nc-preferences-circle-rotate" },
  { iconClass: "nc-planet", label: "nc-planet" },
  { iconClass: "nc-pin-3", label: "nc-pin-3" },
  { iconClass: "nc-paper-2", label: "nc-paper-2" },
  { iconClass: "nc-palette", label: "nc-palette" },
  { iconClass: "nc-notification-70", label: "nc-notification-70" },
  { iconClass: "nc-notes", label: "nc-notes" },
  { iconClass: "nc-note-03", label: "nc-note-03" },
  { iconClass: "nc-money-coins", label: "nc-money-coins" },
  { iconClass: "nc-mobile", label: "nc-mobile" },
  { iconClass: "nc-map-big", label: "nc-map-big" },
  { iconClass: "nc-lock-circle-open", label: "nc-lock-circle-open" },
  { iconClass: "nc-tv-2", label: "nc-tv-2" },
  { iconClass: "nc-time-alarm", label: "nc-time-alarm" },
  { iconClass: "nc-tap-01", label: "nc-tap-01" },
  { iconClass: "nc-tag-content", label: "nc-tag-content" },
  { iconClass: "nc-tablet-2", label: "nc-tablet-2" },
  { iconClass: "nc-support-17", label: "nc-support-17" },
  { iconClass: "nc-sun-fog-29", label: "nc-sun-fog-29" },
  { iconClass: "nc-stre-up", label: "nc-stre-up" },
  { iconClass: "nc-stre-right", label: "nc-stre-right" },
  { iconClass: "nc-stre-left", label: "nc-stre-left" },
  { iconClass: "nc-stre-down", label: "nc-stre-down" },
  { iconClass: "nc-square-pin", label: "nc-square-pin" },
  { iconClass: "nc-spaceship", label: "nc-spaceship" },
  { iconClass: "nc-single-copy-04", label: "nc-single-copy-04" },
  { iconClass: "nc-single-02", label: "nc-single-02" },
  { iconClass: "nc-simple-remove", label: "nc-simple-remove" },
  { iconClass: "nc-simple-delete", label: "nc-simple-delete" },
  { iconClass: "nc-simple-add", label: "nc-simple-add" },
  { iconClass: "nc-settings-tool-66", label: "nc-settings-tool-66" },
  { iconClass: "nc-settings-gear-64", label: "nc-settings-gear-64" },
  { iconClass: "nc-settings-90", label: "nc-settings-90" },
  { iconClass: "nc-umbrella-13", label: "nc-umbrella-13" },
  { iconClass: "nc-vector", label: "nc-vector" },
  { iconClass: "nc-watch-time", label: "nc-watch-time" },
  { iconClass: "nc-zoom-split", label: "nc-zoom-split" },
];
const IconData = () => {
  return (
   <>
    <div className="wrapper">
    <div className="main-panel">
   <div className="content">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">100 Awesome Nucleo Icons</h4>
            <p className="card-category">
              Handcrafted by our friends from
              <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a>
            </p>
          </div>
          <div className="card-body all-icons">
            <div className="row">       
      {icons.map((icon, index) => (
        <Icon
          key={index}
          iconClass={icon.iconClass}
          label={icon.label}
        />
      ))}
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
export default IconData