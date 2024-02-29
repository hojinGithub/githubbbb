import { Button, TextField } from '@mui/material';
import React,{ Component } from 'react';

class login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            password: '',
            message: ''
        }
    }

    Login 


    render() {
        return (
            <div>
                아이디
                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="id"
                    type="text"
                    name="id"
                    value={this.state.id}
                />
                <br />
                비밀번호
                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="password"
                    type="text"
                    name="password"
                    value={this.state.password}
                />
                <br />

                <Button variant="contained" color="primary" onClick={this.Login}> Login </Button>
            </div>
        )
    }
}

export default login;