import { Link } from "react-router-dom";
import React, { Component } from 'react'
import './Animal.css'

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <b>{this.props.animal.name}</b></h3>
          <p>Breed: {this.props.animal.breed}</p>
          <button type="button"onClick={() => {this.props.history.push(`/animals/${this.props.animal.id}/edit`)}}>Edit</button>
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>        
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
          </div>
      </div>
    );
  }
}

export default AnimalCard;