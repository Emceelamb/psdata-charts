import React, {useState} from 'react';
import axios from 'axios';

export default function FetchData() {

  const [data, setData] = useState("Data is loading");
  const apiURL = process.env.PUBLIC_URL+'/test/metadata.json';
  const apiHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
  }

  const fetchData = async() => {
    const response = await axios.get(apiURL, apiHeaders)
    setData(response.data)
  }

  return (
    <div>
      {console.log(data)}
      <button onClick={fetchData}>get data</button>
    </div>
  )
}