"use client";

import "leaflet/dist/leaflet.css";
import LRBA from "../../../public/images/associations/LRBALOGO.png";
import PRBA from "../../../public/images/associations/PRBALOGO.png";
import CRBA from "../../../public/images/associations/CRBALOGO.png";
import BRBA from "../../../public/images/associations/BRBALOGO.png";
import URSRBA from "../../../public/images/associations/URSRBALOGO.png";
import L from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

const clubs = [
  {
    id: 1,
    name: "Pangasinan Roll Ball Association",
     address: "Lingayen, Pangasinan",
  position: [16.0216, 120.2310] as [number, number],
    image: LRBA
  },
  {
    id: 2,
    name: "Philippine Roll Ball Association (PRBA)",
  address: "Fairview, Quezon City",
  position: [14.7006, 121.0719] as [number, number],
     image: PRBA
  },
  {
    id: 3,
    name: "United Reborn Skates",
     position: [14.7075, 121.0385] as [number, number],
     image: URSRBA
  },
  {
    id: 4,
    name: "Bicol Roll Ball Association",
    position: [13.139, 123.743] as [number, number],
     image: BRBA
  },
  {
    id: 5,
    name: "Coron Roll Ball Association",
    address: "Coron, Palawan",
  position: [11.9986, 120.2043] as [number, number],
    image: CRBA
  },
];

import type { StaticImageData } from "next/image";

function createMarker(image: StaticImageData) {
  return L.divIcon({
    className: "",
    html: `
      <div
        style="
          width:40px;
          height:40px;
          border-radius:9999px;
          overflow:hidden;
          border:3px solid #fff;
          background:#fff;
          box-shadow:0 8px 20px rgba(0,0,0,.25);
        "
      >
        <img
          src="${image.src}"
          style="
            width:100%;
            height:100%;
            object-fit:cover;
          "
        />
      </div>
    `,
    iconSize: [56, 56],
    iconAnchor: [28, 28],
    popupAnchor: [0, -28],
  });
}
export default function PhilippinesMap() {
  return (
    <MapContainer
      center={[12.8797, 121.774]}
      zoom={5}
      minZoom={5}
      maxZoom={10}
      scrollWheelZoom
      style={{
        width: "100%",
        height: "550px",
      }}
    >
      <TileLayer
       url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
    subdomains={['mt0','mt1','mt2','mt3']}
      />

      {clubs.map((club) => (
        <Marker
          key={club.id}
          position={club.position}
          icon={createMarker(club.image)}
        >
          <Popup>
            <div
              style={{
                minWidth: 220,
                textAlign: "center",
              }}
            >
              <img
                src={club.image.src}
                alt={club.name}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  objectFit: "cover",
                  margin: "0 auto 12px",
                  border: "3px solid white",
                  boxShadow: "0 6px 16px rgba(0,0,0,.2)",
                }}
              />

              <h3
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  marginBottom: 6,
                }}
              >
                {club.name}
              </h3>

              <p
                style={{
                  color: "#6b7280",
                  fontSize: 14,
                }}
              >
                Philippine Roll Ball Association
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}