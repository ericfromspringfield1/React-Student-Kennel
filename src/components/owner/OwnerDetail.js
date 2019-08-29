import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerDetail.css'
import {firstLetterCase} from '../../modules/helpers'

class OwnerDetail extends Component {

  state = {
      name: "",
      phoneNumber: "",
  }

  componentDidMount(){
    console.log("OwnerDetail: ComponentDidMount");
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.get(this.props.owner)
    .then((owner) => {
      this.setState({
        name: owner.name,
        phoneNumber: owner.phoneNumber,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./BryanNilsen.jpg')} alt="My Dog" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{firstLetterCase}{this.state.name}</span></h3>
            <p>phoneNumber: {this.state.phoneNumber}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleOwnerDelete}>Discharge Employee</button>
        </div>
      </div>
    );
  }
  handleOwnerDelete = () => {
    //invoke the delete function in OwnerManger and re-direct to the owner list.
    this.setState({loadingStatus: true})
    OwnerManager.delete(this.props.ownerId)
    .then(() => this.props.history.push("/owners"))
}
}

export default OwnerDetail;