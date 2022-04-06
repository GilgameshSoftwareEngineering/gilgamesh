import React from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';
import "./AdminSide.css"
import image from '../commerce4.png';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap'; 
import { render } from '@testing-library/react';
//import { render } from '@testing-library/react';
//import React, {useState} from 'react';


function AdminSide() {
return(
  <><div>
    <Table striped bordered hover>
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
          <th>View Request</th>
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
          <td><Button variant="secondary">View Request</Button></td>
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
          <td><Button variant="secondary">View Request</Button></td>
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
          <td><Button variant="secondary">View Request</Button></td>
        </tr>
      </tbody>
    </Table>
  </div>
  <div style={{}}>
  <div style ={{paddingLeft: 820}}>
  <Button variant="primary" size="lg">
    Add New Project
  </Button>
</div>
</div>
    </>
  );
}


// function ProjectTable() {
//   return(
// <div>
//   <Table striped bordered hover>
//     <thead>
//       <tr>
//       <th>Name</th>
//       <th>Date</th>
//       <th>Project Name</th>
//       <th>Licensing</th>
//       <th>Version</th>
//       <th>Status</th>
//       <th>Date Checked</th>
//       <th>Project URL</th>
//       <th>View Request</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>Mark Fischer</td>
//         <td>09/13/2022</td>
//         <td>Meps</td>
//         <td>Commercial</td>
//         <td>V0.1</td>
//         <td>Approved</td>
//         <td>09/15/2022</td>
//         <td>URL</td>
//         <td><Button variant="secondary">View Request</Button></td>
//       </tr>
//       <tr>
//         <td>Ray Bach</td>
//         <td>09/18/2022</td>
//         <td>Meps</td>
//         <td>Commercial</td>
//         <td>V0.13</td>
//         <td>Denied</td>
//         <td>09/22/2022</td>
//         <td>URL</td>
//         <td><Button variant="secondary">View Request</Button></td>
//       </tr>
//       <tr>
//         <td>Larry Smith</td>
//         <td>09/29/2022</td>
//         <td>Meps</td>
//         <td>Private</td>
//         <td>V1.12</td>
//         <td>Pending</td>
//         <td>10/5/2022</td>
//         <td>URL</td>
//         <td><Button variant="secondary">View Request</Button></td>
//       </tr>
//     </tbody>
//   </Table>
//   </div>
//   )
// };

{/* <div className='block-button'>
  <Button variant="primary" size="lg">
    Add New Project
  </Button>
</div> */}
export default AdminSide;