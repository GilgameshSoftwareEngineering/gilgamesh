import React from 'react';
import { Table } from 'react-bootstrap'; 
import "./ClientSide.css"



const ClientSide = () => {
  return(
  ProjectTable()  
  );
};
function ProjectTable() {
  return(<Table striped bordered hover>
    <thead>
      <tr>
      <th>Name</th>
      <th>Date</th>
      <th>Project Name</th>
      <th>Licensing</th>
      <th>Version</th>
      <th>Status</th>
      <th>Date Checked</th>
      <th>Project URL</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mark Fischer</td>
        <td>09/13/2022</td>
        <td>Meps</td>
        <td>Commercial</td>
        <td>V0.1</td>
        <td>Approved</td>
        <td>09/15/2022</td>
        <td>URL</td>
      </tr>
      <tr>
        <td>Ray Bach</td>
        <td>09/18/2022</td>
        <td>Meps</td>
        <td>Commercial</td>
        <td>V0.13</td>
        <td>Denied</td>
        <td>09/22/2022</td>
        <td>URL</td>
      </tr>
      <tr>
        <td>Larry Smith</td>
        <td>09/29/2022</td>
        <td>Meps</td>
        <td>Private</td>
        <td>V1.12</td>
        <td>Pending</td>
        <td>10/5/2022</td>
        <td>URL</td>
      </tr>
    </tbody>
  </Table>
  );
};

function text(){
  return(
  <div class = "text-container">
    <p>Open Source Tracking System</p>
  </div>
  )
}

export default ClientSide;