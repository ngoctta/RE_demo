import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleClick = (name) => {
        alert(name);
    }
    render() {
        return (
            <div>
                <button onClick={ () => {this.handleClick('ngoc1')}} type="button" className="btn btn-warning" data-toggle="button" aria-pressed="false" autoComplete="off">handle event</button>

            </div>
        )
    }
}
