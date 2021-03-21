import React, { Component } from 'react'

export default class DataBuilding extends Component {
    name = "hello";
    demo = {
        name: "Nguyen van a",
        id: 1,
        content: "a"
    }
    getData = () => {
        return (
            <i class="fa fa-address-book" aria-hidden="true"></i>
        );
    }
    render() {
        let subtitle = "subtitle";
        return (
            <div>
                { this.name }
                <div className="row">
                    <div className="col-md-3">
                        <div className="card text-left">
                            <img className="card-img-top" src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{this.demo.name}</h4>
                                <h5 className="card-title">{subtitle}</h5>
                                <p className="card-text">{this.demo.content}</p>sss
                                { this.getData()} { this.getData()} { this.getData()}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
