import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    mailId: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(
      `http://52.90.0.242:8081/user/getUserById/${id}`
    );
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>First Name: </b>
                  {user.firstName}
                </li>
                <li className="list-group-item">
                  <b>Last Name: </b>
                  {user.lastName}
                </li>
                <li className="list-group-item">
                  <b>Phone: </b>
                  {user.phoneNumber}
                </li>
                <li className="list-group-item">
                  <b>Email: </b>
                  {user.mailId}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
