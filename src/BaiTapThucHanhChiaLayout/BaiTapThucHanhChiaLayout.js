import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

export default class BaiTapThucHanhChiaLayout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
        )
    }
}
