import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="https://getbootstrap.com/docs/4.0/components/progress/#backgrounds">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="https://getbootstrap.com/docs/4.0/components/progress/#backgrounds">Home
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://getbootstrap.com/docs/4.0/components/progress/#backgrounds">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://getbootstrap.com/docs/4.0/components/progress/#backgrounds">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://getbootstrap.com/docs/4.0/components/progress/#backgrounds">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
