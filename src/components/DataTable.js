import React, { useState, useEffect } from "react";
import { useTable, useSortBy, usePagination } from "react-table";

import axios from "axios";

export default function DataChart({dataset}) {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  // const apiURL = `https://dppa-dpo-api-dev.azure-api.net/public/datahub/${match.params.dataset}/json`;


  useEffect(() => {

    const apiURL = `https://dppa-dpo-api-dev.azure-api.net/public/datahub/${dataset}/json`;
    const apiHeaders = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    const fetchData = async () => {
      const response = await axios.get(apiURL, apiHeaders);

      setData(response.data.dataset);

      getKeys(response.data.dataset[0]);
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
      useSortBy,
      usePagination,
    
  );

  return (
    <>
      <table {...getTableProps()} className="helvetica w-100">
        <div className="flex justify-center"></div>
        <thead className="">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="f4 pt2 pb2"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
