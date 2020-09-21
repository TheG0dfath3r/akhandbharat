import React from "react"
import { Map, Marker, Popup, TileLayer } from "react-leaflet"

import "./app.css"

export default function App() {
  return (
    <Map center={[29.0588, 76.0856]} zoom={9}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  )
}
