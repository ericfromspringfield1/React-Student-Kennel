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
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Remove Location</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;
