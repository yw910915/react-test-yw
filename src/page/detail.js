import React from 'react';
import { Link } from 'react-router-dom'


export default class Detail extends React.Component {
    render() {
        return (
            <div>
                <a>去home</a>
                <Link to="/home">去home-------------------</Link>
            </div>
        )
    }
}
