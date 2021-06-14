import React, { useState, useEffect } from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css'


import axios from 'axios';

const BarChart = ({ data, keys }) => <C3Chart data={{ json: data, type:'bar', keys: keys }} />;

const chartData = {
  line: {
    data1: [30, 20, 50, 40, 60, 50],
    data2: [200, 130, 90, 240, 130, 220],
    data3: [300, 200, 160, 400, 250, 250]
  },
  columns: {
    data1: [30, 200, 100, 400, 150, 250],
    data2: [130, 100, 140, 200, 150, 50]
  }
};

export default function D3Fatalities() {

  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [formattedData, setFormattedData] = useState([]);
  const [keys, setKeys] = useState([]);

  let fdata = {};
  let ffdata = {};

  useEffect(() => {
    const apiURL = "https://dppa-dpo-api-dev.azure-api.net/public/datahub/fatalities/json";
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
    // let typesOfIncidents = [];
    for(let i = 0; i < data.length; i++) {
      let Mission_Acronym = data[i].Mission_Acronym;
      let TypeOfIncident = data[i].Type_Of_Incident; 
      if(!keys.includes(TypeOfIncident)){
        setKeys(TypeOfIncident);
      }
      // console.log(fdata)

      // if(ffdata.length===0){
      //   ffdata.push({'category': Mission_Acronym, [TypeOfIncident]:1})
      // } else {


      // for(let j = 0; j< ffdata.length; j++) {
      //   if(ffdata[j].category === Mission_Acronym) {
      //     if(ffdata[j].hasOwnProperty(TypeOfIncident)){
      //       ffdata[j][TypeOfIncident]++
      //     } else {
      //       ffdata[j][TypeOfIncident] = 1
      //     }
      //   } else {
      //     ffdata.push({'category': Mission_Acronym, [TypeOfIncident]:1})
      //   }
      // }
      // }

      //START
      if(fdata.hasOwnProperty(Mission_Acronym)) {
        fdata[data[i].Mission_Acronym].push(TypeOfIncident);
        // setFormattedData(formattedData => [...formattedData, data[i]])
      } else {
        fdata[data[i].Mission_Acronym]=[TypeOfIncident];
      }
      //END
    }
    for (const [key, value] of Object.entries(fdata)) {
      // value.unshift(key)
      // ffdata.push(value)

      // console.log(`${key}, ${value}`)

      // let typesOfIncidents_ = {}
      let typesOfIncidents_ = []
      // for(let t = 0; t < typesOfIncidents.length; t++) {
      //   let count = value.filter(x => x === String(typesOfIncidents[t])).length;
      //   // typesOfIncidents_[typesOfIncidents[t]] = count;
      //   typesOfIncidents_.push(count);
      // }
      // typesOfIncidents_.category = key;
      ffdata[key]=typesOfIncidents_;
      // console.log(key, typesOfIncidents_)
    }
    console.log(keys)
    setFormattedData(ffdata)

  }, [data])

  // useEffect(() => {
  //   console.log(data[0])


  // }, [data])

  return (
    <div>
      <BarChart data={formattedData} keys={keys} />
    </div>
  )
}