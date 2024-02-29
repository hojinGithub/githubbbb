import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListSampleComponent from "../sample/ListSampleComponent";
import AddSampleComponent from "../sample/AddSampleComponent";
import EditSampleComponent from "../sample/EditSampleComponent";
import singupComponent from "../sample/singupComponent";
import loginComponent from "../sample/loginComponent";
import listCustomer from "../sample/listCustomer";


const AppRouter = () => {
    
    return(
        <div>
            <BrowserRouter>
                <div style={style}>
                    <Route path="/" exact={true} component={ListSampleComponent} />
                    <Route path="/samples" exact={true} component={ListSampleComponent} />
                    <Route path="/add-sample" exact={true} component={AddSampleComponent} />
                    <Route path="/edit-sample" exact={true} component={EditSampleComponent} />
                    <Route path="/sign-up" exact={true} component={singupComponent} />
                    <Route path="/listCustomer" exact={true} component={listCustomer} />

                    <Route path="/login" exact={true} component={loginComponent} />
                </div>
            </BrowserRouter>
        </div>
    )
}

const style = {
    margin: '10px'
}

export default AppRouter;