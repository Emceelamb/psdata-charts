import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// url to a valid topojson file
const geoUrl =   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"


// const markers = [
//   {markerOffset: -30, name: "Buenos Aires", coordinates: [-58.3816, -34.6037]},
//   { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
//   { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
//   { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
//   { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
//   { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
//   { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
//   { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
//   { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
//   { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
//   { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
//   { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] }
// ];


export default function WorldMap() { 
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const apiURL = "https://dppa-dpo-api-dev.azure-api.net/public/datahub/pkomissions/json";
    const apiHeaders = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    const fetchData = async () => {
      const response = await axios.get(apiURL, apiHeaders);

      getKeys(response.data[0]);
      setData(response.data)
    };


    var getKeys = function (obj) {
      for (var key in obj) {
        const header = {
          Header: key,
          accessor: key,
        };
        setColumns((columns) => [...columns, header]);
      }
    };
    // setData([]);
    // setColumns([]);
    fetchData();
    return () =>{
      setData([]);
      setColumns([]);
    }
  }, []);

  useEffect(() => {
    data.map((d,key) => {
//   { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] }
      setMarkers((markers)=>[...markers, {markerOffset: 15, name: d.Mission_Acronym, coordinates: [d.Mission_longitude, d.Mission_latitude]}])
    })

  }, [data])


  return (
    <>
    <h1 className="f1 helvetica tc">D3 Map</h1>
    <ComposableMap>
      {console.log(markers)}
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translateY(200px)"
            transform="scale(0.5)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "8px" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
    </>
  )
}
