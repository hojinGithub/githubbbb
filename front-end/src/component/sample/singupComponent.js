import React, { Component } from 'react';
import ApiService from '../../ApiService';
import { TextField, Button } from '@mui/material';

import '../../css/signupComponent.css';

class SignupComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: '',
            password: '',
            passwordConfirm: '',
            hp: '',
            birthday: null
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    CheckPasswordMatch = () => {
        const { password, passwordConfirm } = this.state;
        if (password !== passwordConfirm) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        }
    };

   

    saveCustomer = (e) => {
        e.preventDefault();

        

        let inputData = {
            
            email: this.state.email,
            name: this.state.name,
            password: this.state.password,
            hp: this.state.hp,
            birthday: this.state.birthday
        }

        console.log(inputData);

        // 등록처리 
        ApiService.addCustomer(inputData)
            .then(res => {
                this.setState({

                })
                console.log('input 성공 : ', res.data);
                this.props.history.push('/index');
            })
            .catch(err => {
                console.log('addCustomer() 에러 ', err);
            });

    }


    render() {
        return (
            <div id='Page' >

                <h6>이메일</h6>

                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="이메일"
                    type="text"
                    name="email"
                    value={this.state.email}
                    placeholder='이메일 입력'
                    onChange={this.onChange}
                />
                <Button variant="contained" color="primary" onClick={this.CheckEmail}> 인증요청 </Button>
                <hr />
                <br /><br />

                <h6>이름</h6>
                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="이름"
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder='이름 입력'
                    onChange={this.onChange}
                />
                <hr />
                <br /><br />

                <h6>비밀번호</h6>
                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="비밀번호"
                    type="password"
                    name="password"
                    value={this.state.password}
                    placeholder='비밀번호 입력'
                    onChange={this.onChange}
                />
                <hr />
                <br /><br />

                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="비밀번호 확인"
                    type="password"
                    name="passwordConfirm"
                    value={this.state.passwordConfirm}
                    placeholder='비밀번호 확인'
                    onChange={this.onChange}
                    onBlur={this.CheckPasswordMatch} 
                />
                                

                <hr />
                <br /><br />

                <h6>핸드폰</h6>
                <select id="company" name="company" value={this.state.company} onChange={this.onChange}>
                    <option>통신사</option>
                    <option>SKT</option>
                    <option>KT</option>
                    <option>LGU+</option>
                </select>

                <TextField
                    required
                    id="standard-required"
                    variant="standard"
                    label="핸드폰 번호"
                    type="text"
                    name="hp"
                    value={this.state.hp}
                    placeholder='핸드폰 번호'
                    onChange={this.onChange}
                />
                <hr />
                <br /><br />
                
                

                <h6>생년월일</h6>
                <TextField
                    required
                    id="standard-required"
                    variant="standard"

                    type="date"
                    name="birthday"
                    value={this.state.birthday}
                    onChange={this.onChange}
                />
                <hr />
                <br /><br />
                <Button variant="contained" color="primary" onClick={this.saveCustomer}>회원가입</Button>
            </div>
        )
    }
}

export default SignupComponent;