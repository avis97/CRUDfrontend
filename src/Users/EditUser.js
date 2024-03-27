import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function EditUser() {
  let navigete = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    mailId: "",
  });

  const { firstName, lastName, phoneNumber, mailId } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://52.90.0.242:8081/user/updateUser/${id}`, user);
    navigete("/");
  };

  const loadUser = async (e) => {
    const result = await axios.get(
      `http://52.90.0.242:8081/user/getUserById/${id}`
    );
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="First Name" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Last Name" className="form-label">
                Last Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Number" className="form-label">
                Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Gmial" className="form-label">
                Gmail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your E-mail"
                name="mailId"
                value={mailId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
