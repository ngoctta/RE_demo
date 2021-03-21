import React, { Component } from 'react'
import Baner from './Baner'
import Item from './Item'

export default class Content extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Baner></Baner>
                    <div className="row">
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                    </div>
                </div>
            </div>
        )
    }
}
