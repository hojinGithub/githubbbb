import React, { Component } from 'react';
import ApiService from '../../ApiService';
import {Table, TableHead, TableRow, TableCell, TableBody, Button, Typography} from '@mui/material';
import {Create, Delete } from '@mui/icons-material';    // npm install -f @mui/icons-material@^5.11.16


class ListSampleComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            samples: [],            // 5.
            message: null
        }
    }

    // 라이프사이클 중 컴포넌트가 생성된 후 사용자에게 보여지기 전까지의 전체 과정을 렌더링
    // 데이터 로딩 과정 
    componentDidMount() {
        this.reloadSampleList();    // 1.
    }


    // list
    reloadSampleList = () => {
        ApiService.fetchSamples()   // 2.
        .then(res => {              // 4.
            this.setState({
                samples: res.data
            })
        })
        .catch(err => {
            console.log('reloadSampleList() Error', err);
        });
    }

    // insert
    addSample = () => {
        window.localStorage.removeItem("sampleID") // SQL에서 max + 1 로 자동 증가 처리하므로
        // RouterComponent.js의 <Route path="/add-sample" exact={true} component={AddSampleComponent} />  호출
        this.props.history.push("/add-sample");
    }

    //update
    editSample = (ID) =>{
        window.localStorage.setItem("sampleID", ID);    // EditSampleComponent.js update문에서 where절에 사용
        // RouterComponent.js의 <Route path="/edit-sample" exact={true} component={EditSampleComponent} /> 호출
        this.props.history.push("/edit-sample");
    }

    // delete
    deleteSample = (sampleID) => {
        ApiService.deleteSample(sampleID)
            .then(res => {
                this.setState({
                    samples: this.state.samples.filter(sample => sample.id !== sampleID)
                });
                console.log('delete 성공 : ', res.data);    // 컨트롤러에서 전달함(resultCode, resultMsg)
            })
            .catch(err => {
                console.log('delete() err', err);
            })
    }

    render() {
        return(
            <div><br></br>

                <Typography variant="h4" style={style} > SampleList </Typography>
                <Button variant="contained" color="primary" onClick={this.addSample}> Add Sample </Button>
                <br/><br/>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell> Sample ID </TableCell>
                            <TableCell> Name </TableCell>
                            <TableCell> Brand </TableCell>
                            <TableCell> MadeIn </TableCell>
                            <TableCell> Pice </TableCell>
                            <TableCell> Edit </TableCell>
                            <TableCell> Delete </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {this.state.samples.map(sample =>   // 6.
                            <TableRow key={sample.id}>
                                <TableCell component="th" scope="sample"> {sample.id} </TableCell>
                                <TableCell> {sample.name} </TableCell>
                                <TableCell> {sample.brand} </TableCell>
                                <TableCell> {sample.madein} </TableCell>
                                <TableCell> {sample.price} </TableCell>
                                
                                <TableCell onClick={() => this.editSample(sample.id)}>
                                    <Create />
                                </TableCell>
                                
                                <TableCell onClick={() => this.deleteSample(sample.id)}>
                                    <Delete/>
                                </TableCell>

                            </TableRow>
                            )}
                    </TableBody>
                </Table>
                
            </div>
        )
    }
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default ListSampleComponent;