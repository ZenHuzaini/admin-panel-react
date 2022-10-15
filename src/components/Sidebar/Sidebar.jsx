import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="top">
				<Link style={{ textDecoration: "none" }} to="/">
					<span className="logo">Zen Huzaini</span>
				</Link>
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">MAIN</p>
					<li>
						<Link style={{ textDecoration: "none" }} to="/">
							<DashboardIcon className="icon" />
							<span>Dashboard</span>
						</Link>
					</li>

					<p className="title">LISTS</p>

					<li>
						<Link style={{ textDecoration: "none" }} to="/users">
							<AccountCircleIcon className="icon" />
							<span>Users</span>
						</Link>
					</li>
					<li>
						<Link style={{ textDecoration: "none" }} to="/products">
							<DashboardIcon className="icon" />
							<span>Products</span>
						</Link>
					</li>
					<li>
						<DashboardIcon className="icon" />
						<span>Delivery</span>
					</li>
					<li>
						<DashboardIcon className="icon" />
						<span>Logs</span>
					</li>
					<li>
						<DashboardIcon className="icon" />
						<span>Notification</span>
					</li>

					<p className="title">USER</p>

					<li>
						<DashboardIcon className="icon" />
						<span>Setting</span>
					</li>
					<li>
						<DashboardIcon className="icon" />
						<span>Profile</span>
					</li>
					<li>
						<DashboardIcon className="icon" />
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className="bottom">
				<div className="colorOption"></div>
				<div className="colorOption"></div>
			</div>
		</div>
	);
};

export default Sidebar;
