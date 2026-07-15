import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewVolunteer = () => {

    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios.post("http://localhost:3001/view")
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert("Error Fetching Data");
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col col-12">
                    <h2 className="text-center mb-4">View All Volunteers</h2>

                    <table className="table table-bordered table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Volunteer ID</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>Blood Group</th>
                                <th>Department</th>
                                <th>Year</th>
                                <th>Camp Name</th>
                                <th>Hours</th>
                                <th>Address</th>
                                <th>Unit No.</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.volunteerId}</td>
                                    <td>{value.fullName}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.dob}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.bloodGroup}</td>
                                    <td>{value.department}</td>
                                    <td>{value.yearOfStudy}</td>
                                    <td>{value.campName}</td>
                                    <td>{value.hoursCompleted}</td>
                                    <td>{value.address}</td>
                                    <td>{value.unitNumber}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    );
};

export default ViewVolunteer;