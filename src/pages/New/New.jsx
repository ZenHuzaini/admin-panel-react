import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

import "./new.scss";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

const New = ({ inputs, title }) => {
	const [file, setFile] = useState("");

	console.log("get file ", file);

	const formInput = inputs.map((data) => {
		return (
			<div key={data.id} className="formInput">
				<label>{data.label}</label>
				<input type={data.type} placeholder={data.placeholder} />
			</div>
		);
	});
	return (
		<div className="new">
			<Sidebar />
			<div className="newContainer">
				<Navbar />
				<div className="top">
					<h1>{title}</h1>
				</div>
				<div className="bottom">
					<div className="left">
						<img
							src={
								file
									? URL.createObjectURL(file) //to create new url file from local data
									: "/images/no-image.png"
							}
							alt=""
							srcSet=""
						/>
					</div>
					<div className="right">
						<form action="">
							<div className="formInput">
								<label htmlFor="addFile">
									Image: <DriveFolderUploadOutlined className="icon" />
								</label>
								<input
									hidden
									type="file"
									id="addFile"
									onChange={(e) => {
										setFile(e.target.files[0]);
									}}
								/>
							</div>
							{formInput}
							<button>Send</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
