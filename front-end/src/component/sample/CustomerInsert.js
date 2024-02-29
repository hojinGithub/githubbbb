import React, { Component } from 'react';

class CustomerInsert extends Component {

    render() {
        return (
            <div>

                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="id"
                    type="text"
                    name="id"
                    value={this.state.id}
                    placeholder='Input sample id'
                    onChange={this.onChange}
                /><br></br>

                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="name"
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder='Input sample name'
                    onChange={this.onChange}
                /><br></br>
                
                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="password"
                    type="text"
                    name="password"
                    value={this.state.password}
                    placeholder='Input sample password'
                    onChange={this.onChange}
                /><br></br>

                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="passwordConfirm"
                    type="text"
                    name="passwordConfirm"
                    value={this.state.name}
                    placeholder='Input sample passwordConfirm'
                    onChange={this.onChange}
                /><br></br>

                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="passwordConfirm"
                    type="text"
                    name="passwordConfirm"
                    value={this.state.name}
                    placeholder='Input sample passwordConfirm'
                    onChange={this.onChange}
                /><br></br>

                
            </div>
        )
    }
}