import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MetaData() {
  const [metadata, setMetadata] = useState({});

  useEffect(() => {

    const apiURL = `${process.env.PUBLIC_URL}/test/metadata.json`;
    const apiHeaders = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    };

    const fetchMetadata = async () => {
      const response = await axios.get(apiURL, apiHeaders);
      setMetadata(response.data.metadata[0]);
    }
    fetchMetadata();
  }, [])

  return (
    <div>
      <p>{metadata.dataset_name}</p>
    </div>
  )

}