import { faker } from "@faker-js/faker";

const users = [];

function createRandomUser() {
	const status = ["active", "nonactive"];
	return {
		id: faker.datatype.uuid(),
		username: faker.internet.userName(),
		email: faker.internet.email(),
		avatar: faker.image.avatar(),
		password: faker.internet.password(),
		birthdate: faker.date.birthdate(),
		registeredAt: faker.date.past(),
		status: status[Math.floor(Math.random() * 2)],
	};
}

export const userData = (dataLength) => {
	Array.from({ length: dataLength }).forEach(() => {
		users.push(createRandomUser());
	});

	return users;
};

export const userColumns = [
	{ field: "id", headerName: "User ID", width: 150 },
	{
		field: "avatar",
		headerName: "User Picture",
		width: 130,
		renderCell: (value) => {
			return (
				<div className="imageCell">
					<img className="cell" src={value.row.avatar} alt={value.username} />
					{faker.name.firstName()}
				</div>
			);
		},
	},
	{ field: "username", headerName: "username", width: 130 },
	{ field: "email", headerName: "EMail", width: 200 },
	{ field: "password", headerName: "Passowrd", width: 150 },
	{ field: "birthdate", headerName: "Birth Date", width: 150 },
	{ field: "registeredAt", headerName: "Created At", width: 130 },
	{
		field: "status",
		headerName: "Status",
		width: 100,
		renderCell: (value) => {
			return <div className={`statusCell ${value.row.status}`}>{value.row.status}</div>;
		},
	},
];
