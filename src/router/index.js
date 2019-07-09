import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../page/home';
import Detail from '../page/detail';
import Demo1 from '../page' 
import Tabble from '../page/tabble/index.js'



const BasicRoute = () => (
    <HashRouter>
        {/* <Switch> */}
            <Route exact path="/" component={Demo1}/>
            <Route exact path='/tabble' component={Tabble}></Route>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
        {/* </Switch> */}
    </HashRouter>
);


export default BasicRoute;