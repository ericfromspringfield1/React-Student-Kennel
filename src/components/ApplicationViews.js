import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owner/OwnerDetail'
import AnimalForm from './animal/AnimalForm'
import LocationForm from './location/LocationForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerForm from './owner/OwnerForm'
import AnimalEditForm from './animal/AnimalEditForm'
import LocationEditForm from './location/LocationEditForm'
import EmployeeEditForm from './employee/EmployeeEditForm'
import OwnerEditForm from './owner/OwnerEditForm'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'
import Login from './auth/Login'





class ApplicationViews extends Component {

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />

        <Route path="/login" component={Login} />          
           
    
        <Route exact path="/animals" render={props => {
        if (this.isAuthenticated()) {
        return <AnimalList {...props} />
        } else {
        return <Redirect to="/login" />
        }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
     // Pass the animalId to the AnimalDetailComponent
        return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
        }} />
        <Route path="/animals/new" render={(props) => {return <AnimalForm {...props} />
        }} />

      <Route path="/animals/:animalId(\d+)/edit" render={props => {
          return <AnimalEditForm {...props} />
        }}
      />

        <Route exact path="/locations" render={props => {
        if (this.isAuthenticated()) {
        return <LocationList {...props} />
        } else {
        return <Redirect to="/login" />
        }
        }} />
        <Route exact path="/locations/:locationId(\d+)" render={(props) => {
     // Pass the locationId to the LocationDetailComponent
        return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props}/>
        }} />
        <Route path="/locations/new" render={(props) => {
        return <LocationForm {...props} />
        }} />   
        <Route path="/locations/:locationId(\d+)/edit" render={props => {
        return <LocationEditForm {...props} />
        }}/>   
        <Route exact path="/employees" render={props => {
        if (this.isAuthenticated()) {
        return <EmployeeList {...props} />
        } else {
        return <Redirect to="/login" />
        }
        }} />
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList />
        }} />
        <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
     // Pass the employeeId to the EmployeeDetailComponent
        return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props}/>
        }} />
        <Route path="/employees/new" render={(props) => {
        return <EmployeeForm {...props} />
        }} />
        <Route path="/employees/:employeeId(\d+)/edit" render={props => {
        return <EmployeeEditForm {...props} />
        }}/>   
         <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
        return <EmployeeWithAnimals {...props} />
        }} />

        <Route exact path="/owners" render={props => {
        if (this.isAuthenticated()) {
        return <OwnerList {...props} />
        } else {
        return <Redirect to="/login" />
        }
        }} />
        
        <Route exact path="/owners" render={(props) => {
          return <OwnerList />
        }} />

        <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
     // Pass the ownerId to the OwnerDetailComponent
        return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} {...props}/>
        }} />

        <Route path="/owners/new" render={(props) => {
        return <OwnerForm {...props} />
        }} />
        <Route path="/owners/:ownerId(\d+)/edit" render={props => {
        return <OwnerEditForm {...props} />
        }}/>   
      </React.Fragment>
    )
  }
}

export default ApplicationViews