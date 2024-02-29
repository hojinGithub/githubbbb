import React, { Component } from 'react';
import ApiService from '../../ApiService';
import { TextField, Typography, Button } from '@mui/material';

class AddSampleComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {  //2. 해당 변수에 입력한 값으로 변경된 상태
            name: '',
            brand: '',
            madein: '',
            price: '',
            message:''
        }
    }

    onChange = (e) => { // 1. 입력한 값으로 변경한다.
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    saveSample = (e) => {
        e.preventDefault();

        let inputData = {   // 3. 읽어온다.
            name: this.state.name,
            brand: this.state.brand,
            madein: this.state.madein,
            price: this.state.price
        }
        
        // 등록 처리(화면에서 입력한 값 -> onChange() -> setState() -> inputData)
        ApiService.addSample(inputData)  // 스프링부트와의 통신기능 호출 
            .then(res => {
                this.setState({

                })
                console.log('input 성공 : ', res.data);  // 컨트롤러에서 전달함(resultCode, resultMsg)
                this.props.history.push('/samples');    // RouterComponent.js - ListComponent 호출
            })
            .catch(err => {
                console.log('addSample() 에러 ', err);
            });
    }

    render() {
        return(
            <div align="center"><br></br>
                <Typography variant="h4">Add Sample</Typography>
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
                        label="brand"
                        type="text"
                        name="brand"
                        value={this.state.brand}
                        placeholder='Input sample brand'
                        onChange={this.onChange}
                    /><br></br>

                    <TextField
                        required
                        id="standard-required"
                        variant="standard"
                        label="madein"
                        type="text"
                        name="madein"
                        value={this.state.madein}
                        placeholder='Input sample madein'
                        onChange={this.onChange}
                    /><br></br>

                    <TextField
                        required
                        id="standard-required"
                        variant="standard"
                        label="price"
                        type="text"
                        name="price"
                        value={this.state.price}
                        placeholder='Input sample price'
                        onChange={this.onChange}
                    /><br></br> <br/>

                <Button variant="contained" color="primary" onClick={this.saveSample}> Save </Button>
            
            </div>

            
        )
    }
}

export default AddSampleComponent;