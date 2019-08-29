import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'
import {firstLetterCase} from '../../modules/helpers'

class LocationDetail extends Component {

  state = {
      name: "",
      breed: "",
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./301Plus.jpeg')} alt="Location" />
          </picture>
            <h3>Location: <span style={{ color: 'darkslategrey' }}>{firstLetterCase}{this.state.name}</span></h3>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleLocationDelete}>Close Location</button>
        </div>
      </div>
    );
  }

  handleLocationDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    this.setState({loadingStatus: true})
    LocationManager.delete(this.props.locationId)
    .then(() => this.props.history.push("/locations"))
}
}

export default LocationDetail; 