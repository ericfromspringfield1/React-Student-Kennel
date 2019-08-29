import { Link } from "react-router-dom";
import React, { Component } from "react";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require("./301Plus.jpeg")} alt="This Place" />
          </picture>
          <h2>
            Location:
            <span className="card-petname">{this.props.location.name}</span>
          </h2>
          <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>        
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Remove Location</button>
          <button type="button" onClick={() => {this.props.history.push(`/locations/${this.props.location.id}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;
