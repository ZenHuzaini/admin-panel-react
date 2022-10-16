import { PersonAdd } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userColumns, userData } from "../../datasources/user";
import "./dataTable.scss";

const rows = userData(100);
const columns = userColumns;

const DataTable = () => {
	const [data, setData] = useState(rows);
	const handleDelete = (id) => {
		const filetredData = data.filter((data) => {
			return data.id !== id;
		});
		setData(filetredData);
	};
	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 140,
			renderCell: ({ row }) => {
				return (
					<div className="actionCell">
						<Link style={{ textDecoration: "none" }} to={`/users/${row.id}`}>
							<div className="viewButton">View</div>
						</Link>
						<div
							className="deleteButton"
							onClick={() => {
								handleDelete(row.id);
							}}
						>
							Delete
						</div>
					</div>
				);
			},
		},
	];
	return (
		<div className="dataTable">
			<div style={{ height: 700, width: "100%" }}>
				<div className="dataTableTitle">
					User List
					<Link style={{ textDecoration: "none" }} to="/users/new" className="link">
						Add User <PersonAdd />
					</Link>
				</div>
				<DataGrid
					className="dataGrid"
					rows={data}
					columns={columns.concat(actionColumn)}
					pageSize={10}
					rowsPerPageOptions={[10]}
					checkboxSelection
				/>
			</div>
		</div>
	);
};

export default DataTable;
