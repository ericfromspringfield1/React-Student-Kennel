import { Link } from "react-router-dom";
import React, { Component } from "react";

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require("./BryanNilsen.jpg")} alt="My Dog" />
          </picture>
          <h2>
            Name: 
            <span className="card-petname">{this.props.owner.name}</span>
          </h2>
          <p>Phone Number: {this.props.owner.phoneNumber}</p>
          <Link to={`/owners/${this.props.owner.id}`}><button>Details</button></Link>        
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Remove Owner</button>
          <button type="button" onClick={() => {this.props.history.push(`/owners/${this.props.owner.id}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;
