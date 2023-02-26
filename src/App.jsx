import { Fragment, useMemo, useState } from 'react';
import { useTable } from 'react-table';
import { GlobalStyle } from './components/styles/global';

import table_dummy_data from './utils/MOCK_DATA.json';

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
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <Fragment>
      <GlobalStyle />
      <div className="App">
        <h1>React Table</h1>
      </div>
    </Fragment>
  )
}

export default App
