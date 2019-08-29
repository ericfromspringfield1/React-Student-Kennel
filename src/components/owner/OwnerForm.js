import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerForm.css'

class OwnerForm extends Component {
    state = {
        ownerName: "",
        phoneNumber: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    
    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.ownerName === "" || this.state.phoneNumber === "") {
            window.alert("Please input an owner name and phone number");
        } else {
            this.setState({ loadingStatus: true });
            const owner = {
                name: this.state.ownerName,
                phoneNumber: this.state.phoneNumber,
            };

            // Create the owner and redirect user to owner list
            OwnerManager.post(owner)
            .then(() => this.props.history.push("/owners"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="ownerName"
                        placeholder="Owner name"
                        />
                        <label htmlFor="ownerName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="phoneNumber"
                        placeholder="Phone Number"
                        />
                        <label htmlFor="phone number">Them Phone Digits</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewOwner}
                        >Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default OwnerForm
