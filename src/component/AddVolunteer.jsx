import React, { useState } from "react";
import axios from "axios";

const AddVolunteer = () => {

    const [input, changeInput] = useState({
        volunteerId: "",
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        bloodGroup: "",
        department: "",
        yearOfStudy: "",
        campName: "",
        hoursCompleted: "",
        address: "",
        unitNumber: ""
    })

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValues = () => {
        axios.post("http://localhost:3001/add", input)
            .then((response) => {
                if (response.data.status === "success") {
                    alert("Volunteer Added Successfully")
                    changeInput({
                        volunteerId: "",
                        fullName: "",
                        email: "",
                        phone: "",
                        dob: "",
                        gender: "",
                        bloodGroup: "",
                        department: "",
                        yearOfStudy: "",
                        campName: "",
                        hoursCompleted: "",
                        address: "",
                        unitNumber: ""
                    })
                } else {
                    alert("Error")
                }
            })
            .catch(() => {
                alert("Server Error")
            })
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col col-12">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>NSS Volunteer Registration</h3>
                        </div>

                        <div className="card-body">
                            <div className="row g-3">

                                <div className="col-md-6">
                                    <label className="form-label">Volunteer ID</label>
                                    <input type="text" className="form-control" name="volunteerId" value={input.volunteerId} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" name="fullName" value={input.fullName} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Phone</label>
                                    <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Date of Birth</label>
                                    <input type="date" className="form-control" name="dob" value={input.dob} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Gender</label>
                                    <select className="form-control" name="gender" value={input.gender} onChange={inputHandler}>
                                        <option value="">Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Blood Group</label>
                                    <input type="text" className="form-control" name="bloodGroup" value={input.bloodGroup} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Department</label>
                                    <input type="text" className="form-control" name="department" value={input.department} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Year of Study</label>
                                    <input type="text" className="form-control" name="yearOfStudy" value={input.yearOfStudy} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Camp Name</label>
                                    <input type="text" className="form-control" name="campName" value={input.campName} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Hours Completed</label>
                                    <input type="number" className="form-control" name="hoursCompleted" value={input.hoursCompleted} onChange={inputHandler} />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Address</label>
                                    <textarea className="form-control" name="address" value={input.address} onChange={inputHandler}></textarea>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Unit Number</label>
                                    <input type="text" className="form-control" name="unitNumber" value={input.unitNumber} onChange={inputHandler} />
                                </div>

                                <div className="col-12 text-center">
                                    <button className="btn btn-success" onClick={readValues}>
                                        ADD VOLUNTEER
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddVolunteer;