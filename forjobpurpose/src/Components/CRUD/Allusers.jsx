import React, { useEffect, useState } from "react";
import { GetUSers, Deleteuser } from "../Service/api";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CRUD/Crud.css";
import Editusers from "./Editusers";
const Allusers = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    GetAllusers();
  }, []);
  const GetAllusers = async () => {
    const response = await GetUSers();
    console.log("DATA======>", response.data);
    setusers(response.data);
  };
  const Deleteuserdetails = async (id) => {
    await Deleteuser(id);
    GetAllusers();
    console.log("---->", Deleteuserdetails);
  };
  // const Deleteuserdetails = (id) => {
  //   const filtered = users.filter((item) => item !== id);
  //   GetAllusers([...filtered]);
  // };
  return (
    <div>
      <Table
        ClassName="t1"
        striped
        bordered
        hover
        style={{ width: "50%", margin: "auto", marginTop: "50px" }}
      >
        <thead>
          <tr className="tr">
            {/* <th>id</th> */}
            <th>NAME</th>
            <th>AGE</th>
            <th>NICKNAME</th>
            <th>PHONE NO</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        {users.map((item) => {
          return (
            <tbody>
              <tr>
                {/* <td>{item.id}</td> */}
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.nickname}</td>
                <td>{item.phone}</td>
                <td>
                  <Link to={`/edituser/${item.id}`}>
                    <Button variant="primary">edit</Button>{" "}
                  </Link>
                  &nbsp;
                  <Button
                    variant="dark"
                    onClick={() => Deleteuserdetails(item.id)}
                  >
                    delete
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default Allusers;
