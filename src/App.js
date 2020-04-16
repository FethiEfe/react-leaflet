import React from 'react';
import './App.css';
import L from "leaflet"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"

class App extends React.Component {
  state = {
    lat: 35.505,
    lng: -90.09,
    zoom: 4,
  }
  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <div className="App">
        <Map className = "map" center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
          </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}



export default App;
