import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeDetail.css'
import {firstLetterCase} from '../../modules/helpers'

class EmployeeDetail extends Component {

  state = {
      name: "",
      title: "",
  }

  componentDidMount(){
    console.log("EmployeeDetail: ComponentDidMount");
    //get(id) from EmployeeManager and hang on to the data; put it into state
    EmployeeManager.get(this.props.employeeId)
    .then((employee) => {
      this.setState({
        name: employee.name,
        title: employee.title,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./bettyWhite.jpg')} alt="My Dog Betty" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{firstLetterCase}{this.state.name}</span></h3>
            <p>Title: {this.state.title}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleEmployeeDelete}>Discharge</button>
        </div>
      </div>
    );
  }
  handleEmployeeDelete = () => {
    //invoke the delete function in EmployeeManger and re-direct to the employee list.
    this.setState({loadingStatus: true})
    EmployeeManager.delete(this.props.employeeId)
    .then(() => this.props.history.push("/employees"))
}
}

export default EmployeeDetail;