const remoteURL = "http://localhost:5002";

export default {
    //get retrieves an object from a specified resource and identifier.
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`)
    .then(result => result.json());
  },
  //getAll retrieves an array from a specified resource.
  getAll() {
    return fetch(`${remoteURL}/animals`)
    .then(result => result.json());
  },
    //delete deletes an object from specified resource and identifier.
    //we add the method: DELETE because otherwise it's exactly the same as the get(id)
  delete(id) {
    return fetch(`${remoteURL}/animals/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },
    //post will append an object from the body of the http request to a specific resource and will retrieve the newly append object in the body of the response.
  post(newAnimal) {
    return fetch(`${remoteURL}/animals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAnimal)
    }).then(data => data.json())
},
    //replaces a representation fo the target resourse with the request
    update(editedAnimal) {
        return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedAnimal)
        }).then(data => data.json());
      },
};
