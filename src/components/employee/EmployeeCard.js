import { Link } from "react-router-dom";
import React, { Component } from "react";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require("./bettyWhite.jpg")} alt="My Dog" />
          </picture>
          <h2>
            Name:
            <span className="card-petname">{this.props.employee.name}</span>
          </h2>
          <p>Title: {this.props.employee.title}</p>
          <Link to={`/employees/${this.props.employee.id}`}><button>Details</button></Link>        
          <button type="button" onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/details`) }}>Animal Details</button>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Discharge</button>
          <button type="button" onClick={() => {this.props.history.push(`/employees/${this.props.employee.id}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
