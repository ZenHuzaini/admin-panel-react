import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { userColumns, userData } from '../../datasources/user';
import "./dataTable.scss"

const rows = userData(50)
const columns = userColumns
 
const DataTable = () => {
    const actionColumn = [{
        field: "action", headerName: "Action", width: 140, renderCell: ()=>{
            return(
                <div className="actionCell">
                    <div className="viewButton">View</div>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        } },
    ]
  return (
    <div className='dataTable'> <div style={{ height: 700, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns.concat(actionColumn)}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
    />
  </div></div>
  )
}

export default DataTable