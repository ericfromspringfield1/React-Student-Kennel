import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <address>
        Visit Us at the Nashville North Location
        <br />500 Puppy Way
        <img src={require('./kennelJenner.jpg')} alt="My Dog" />
      </address>
  
)
  }
}

export default Home