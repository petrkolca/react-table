import { Fragment, useMemo, useState } from 'react';
import { useTable } from 'react-table';
import table_dummy_data from './utils/MOCK_DATA.json';

import { GlobalStyles } from './components/styles/GlobalStyles';
import { StyledTable } from './components/styles/Table.styled'

function App() {
  const data = useMemo(() => table_dummy_data, []);
  const columns = useMemo(() => [
    {
      Header: "ID",
      accessor: "id"
    },
    {
      Header: "First Name",
      accessor: "first_name"
    },
    {
      Header: "Last Name",
      accessor: "last_name"
    },
    {
      Header: "Email",
      accessor: "email"
    },
    {
      Header: "Gender",
      accessor: "gender"
    },
    {
      Header: "Phone",
      accessor: "phone"
    },
    {
      Header: "Address",
      accessor: "address"
    },
    {
      Header: "City",
      accessor: "city"
    },
  ], []);

  // destructuring useTable Hook
  const { getTableProps, getTableBodyProps, headerGroups, getHeaderGroupProps, rows, prepareRow } = useTable({ columns, data });

  return (
    <Fragment>
      <GlobalStyles />
      <div className="App">
        <div className="container">
          <StyledTable {...getTableProps()}>
            <thead>
              {// loop through headerGroups
                headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>

                  {// map through columns Array and create Header Columns
                    headerGroup.headers.map((column) => (
                    <th {// assign names to header Columns as per Array
                      ...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}

                </tr>
              ))}
            </thead>
            <tbody>
            
            </tbody>
          </StyledTable>
        </div>
      </div>
    </Fragment>
  )
}

export default App
