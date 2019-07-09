import React, { Component } from 'react'
import TabbleOne from './demo1.js' 



export default class TabbleAll extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <div style={{width:'800px',margin: 'auto',marginTop:50}}>
                <TabbleOne/>
            </div>
        )
    }
}
