import React, { Component } from "react"
import LocationManager from "../../modules/LocationManager"
import "./LocationForm.css"

class LocationEditForm extends Component {
    //set the initial state
    state = {
      LocationName: "",
      loadingStatus: true
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExisting = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedLocation = {
        id: this.props.match.params.LocationId,
        name: this.state.LocationName
      };

      LocationManager.update(editedLocation)
      .then(() => this.props.history.push("/locations"))
    }

    componentDidMount() {
      LocationManager.get(this.props.match.params.locationId)
      .then(location => {
          this.setState({
            locationName: location.name,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="locationName"
                value={this.state.locationName}/>
              <label htmlFor="locationName">Location name</label>

            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingLocation}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default LocationEditForm