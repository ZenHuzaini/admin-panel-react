import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { faker } from "@faker-js/faker";

import "./single.scss";
import { Edit } from "@mui/icons-material";
import Chart from "../../components/charts/Chart";
import EnhancedTable from "../../components/Table/Table";

const Single = () => {
	return (
		<div className="single">
			<Sidebar></Sidebar>
			<div className="singleContainer">
				<Navbar></Navbar>
				<div className="top">
					<div className="left">
            <div className="editButton"><Edit /></div>
						<h1 className="title">Information</h1>
						<div className="item">
							<img src={faker.image.people()} alt="" className="itemImg" />
              <div className="detail">
                <h1 className="itemTitle">{faker.name.fullName()}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{faker.internet.email()}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{faker.phone.number()}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{faker.address.streetAddress()}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{faker.address.country()}</span>
                </div>
              </div>
						</div>
					</div>
					<div className="right">
            <Chart aspect={ 4 / 1 } title={"User Activity"}/>
          </div>
				</div>
				<div className="bottom">
						<h1 className="title">Last Transaction</h1>

        <EnhancedTable></EnhancedTable>
        </div>
			</div>
		</div>
	);
};

export default Single;
