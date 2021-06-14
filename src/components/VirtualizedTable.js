import React, { useState, useEffect } from "react";
import { createTableMultiSort, Column, Table, SortIndicator } from 'react-virtualized';
import 'react-virtualized/styles.css'
import useWindowDimensions from '../shared/hooks/useWindowDimensions';
import axios from "axios";
import MetaData from './MetaData.js';

export default function VirtualizedTable({dataset}) {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  const {height, width} = useWindowDimensions();

  function sort({sortBy, sortDirection}) {

  }

  const sortState = createTableMultiSort(sort);

  const headerRenderer = ({dataKey, label}) => {
    const showSortIndicator = sortState.sortBy.includes(dataKey);
    return (
      <>
        <span title={label}>{label}</span>
        {showSortIndicator && (
          <SortIndicator sortDirection={sortState.sortDirection[dataKey]} />
        )}
      </>
    );
  };


  useEffect(() => {

    const apiURL = `https://dppa-dpo-api-dev.azure-api.net/public/datahub/${dataset}/json`;
    const apiHeaders = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    const fetchData = async () => {
      const response = await axios.get(apiURL, apiHeaders);

      getKeys(response.data[0]);
      // response.data.dataset.map((el) => {
      //   setData((data) => [...data, el]);
      // });
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
  }, [dataset]);


  return (
    <>
    <MetaData />
    <Table
      width={width}
      height={height}
      headerHeight={20}
      rowHeight={40}
      rowCount={data.length}
      rowGetter={({index}) => data[index]}
      sort={sortState.sort}
      sortBy={undefined}
      sortDirection={undefined}>
        {
          columns.map((column) => {
            return (
              <Column 
                dataKey={column.Header} 
                width={width/columns.length} 
                label={column.Header} 
                alignItems='left'
                headerRenderer={headerRenderer}
              />
            )
          })
        }
      </Table>
    </>
  );
}
