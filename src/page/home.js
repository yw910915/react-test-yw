import React from 'react';
import { Link } from 'react-router-dom'
// import Tab2 from './Tabs/Tab2'


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <a>去home</a>
                <Link to="/detail">去detail00000000</Link>
            </div>
        )
    }
}