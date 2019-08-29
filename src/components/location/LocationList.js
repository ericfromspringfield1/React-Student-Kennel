import React, { Component } from "react";
//import the components we will need
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";

class LocationList extends Component {
  //define what this component needs to render
  state = {
    locations: []
  };

  componentDidMount() {
    console.log("Location List: ComponentDidMount");
    //getAll from LocationManager and hang on to that data; put it in state
    LocationManager.getAll().then(locations => {
      this.setState({
        locations: locations
      });
    });
  }

  render() {
    console.log("Location List: Render");

    return (
        <React.Fragment>
        <section className="section-content">
            {this.state.locations.map(location => (
                <LocationCard key={location.id} location={location} deleteLocation={this.deleteLocation} {...this.props}/>
                )
                )}
        <button type="button"
            className="btn"
            onClick={() => {this.props.history.push("/locations/new")}}>Add Location
        </button>
        </section>
      <div className="container-cards">
      </div>
      </React.Fragment>
    );
  }
  
  deleteLocation = id => {
      LocationManager.delete(id)
      .then(() => {
          LocationManager.getAll()
          .then((newLocations) => {
              this.setState({
                  locations: newLocations
                })
            })
        })
    }
}

export default LocationList;
