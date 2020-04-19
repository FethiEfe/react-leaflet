import React from 'react';
import './App.css';
import L from "leaflet"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"

let workIcon = L.icon({
  iconUrl: "/work.png",
  iconSize:[25,25],
})
class App extends React.Component {
  state = {
    lat: 35.505,
    lng: -90.09,
    zoom: 4,
  }
  render() {
    const position = [this.state.lat, this.state.lng]
    const workPosition = [40.525532, -74.388229]
    return (
      <div className="App">
        <Map className = "map" center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={workPosition} icon = {workIcon}>
            <Popup>
              <div>I work here</div>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}



export default App;
