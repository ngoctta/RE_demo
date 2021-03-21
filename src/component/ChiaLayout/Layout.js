import React, { Component } from 'react'
import ContentLO from './ContentLO'
import FooterLO from './FooterLO'
import HeaderLO from './HeaderLO'
import SidebarLO from './SidebarLO'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <div className="container">
                     <HeaderLO></HeaderLO>
                    <div className="row">
                        <div className="col-4"><SidebarLO/></div>
                        <div className="col-8"><ContentLO/></div>
                    </div>
                    <FooterLO/>
                </div>
            </div>
        )
    }
}
