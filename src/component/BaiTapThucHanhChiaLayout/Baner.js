import React, { Component } from 'react'

export default class Baner extends Component {
    render() {
        return (
            <div>
                <header className="jumbotron my-4">
                    <h1 className="display-3">A Warm Welcome!</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
                    <a href="https://getbootstrap.com/docs/4.0/components/progress/#backgrounds" className="btn btn-primary btn-lg">Call to action!</a>
                </header>
            </div>
        )
    }
}
