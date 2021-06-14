import React, {useState, useEffect} from "react";
import axios from 'axios';
import c3 from "c3";

export default function Chart () {
  const [data, setData] = React.useState([]);

  const [columns, setColumns] = useState([]);
  const [formattedData, setFormattedData] = useState([]);
  const axis = {
    x: {
      type: 'category',
      categories: ['Malicious Act', 'Accident', 'Illness', 'Self-Inflicted', 'Unknown', 'To Be Determined']
    },
  }

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
    let typesOfIncidents = [];
    let tempFormat = []
    for(let i = 0; i < data.length; i++) {
      let Mission_Acronym = data[i].Mission_Acronym;
      let TypeOfIncident = data[i].Type_Of_Incident; 
      if(!typesOfIncidents.includes(TypeOfIncident)){
        typesOfIncidents.push(TypeOfIncident)
      }

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
      for(let t = 0; t < typesOfIncidents.length; t++) {
        let count = value.filter(x => x === String(typesOfIncidents[t])).length;
        // typesOfIncidents_[typesOfIncidents[t]] = count;
        typesOfIncidents_.push(count);
      }
      // typesOfIncidents_.category = key;
      ffdata[key]=typesOfIncidents_;

      typesOfIncidents_.unshift(key)
      console.log(key, typesOfIncidents_)
      // console.log(formattedData, "ff")
      // setFormattedData([...(formattedData||[]), typesOfIncidents_])
      tempFormat.push(typesOfIncidents_)
    }
    setFormattedData(tempFormat)
    // console.log(typesOfIncidents)
    // console.log(ffdata)
    // setFormattedkData(ffdata)

  }, [data])

  React.useEffect(() => {
    c3.generate({
      bindto: "#chart",
      data: {
        columns: formattedData,
        type: "bar",
      },
      axis: {
        x: {
          type: "category",
          categories: ['Malicious Act', 'Accident', 'Illness', 'Self-Inflicted', 'Unknown', 'To Be Determined']
        }
      }
    });
  }, [formattedData]);
  return (
    <div>
      <h1 className="tc f1 helvetica">D3 Chart</h1>
      {/* {console.log(formattedData)} */}
    <div id="chart" />;

    </div>
  )
}